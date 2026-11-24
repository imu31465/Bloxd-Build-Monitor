export const id = 316;
export const ids = [316];
export const modules = {
  41851: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => yB
    });
    var TB = ZB(37153),
      JB = ZB(37120),
      oB = ZB(40521),
      GB = ZB(40190),
      vB = ZB(39993),
      kB = ZB(38718),
      cB = ZB(40177),
      nB = ZB(40202),
      hB = ZB(37131),
      zB = ZB(39943),
      FB = ZB(40163),
      NB = ZB(40245);
    class gB {
      get renderList() {
        return this._renderList
      }
      set renderList(BB) {
        this._renderList !== BB && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), BB && (this._unObserveRenderList = (0, hB.g)(BB, this._renderListHasChanged)), this._renderList = BB)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(BB) {
        BB !== this._disableImageProcessing && (this._disableImageProcessing = BB, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(BB) {
        this._disableDepthPrePass = BB, this._renderingManager.disableDepthPrePass = BB
      }
      get name() {
        return this._name
      }
      set name(BB) {
        if (this._name !== BB) {
          if (this._name = BB, this._sceneUBOs)
            for (let BB = 0; BB < this._sceneUBOs.length; ++BB) this._sceneUBOs[BB].name = `Scene ubo #${BB} for ${this.name}`;
          if (this._scene)
            for (let BB = 0; BB < this._renderPassIds.length; ++BB) {
              const IB = this._renderPassIds[BB];
              this._engine._renderPassNames[IB] = `${this._name}#${BB}`
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
      setMaterialForRendering(BB, IB) {
        let ZB;
        ZB = Array.isArray(BB) ? BB : [BB];
        for (let TB = 0; TB < ZB.length; ++TB)
          for (let BB = 0; BB < this.options.numPasses; ++BB) {
            let JB = ZB[TB];
            ZB[TB].vR && (JB = ZB[TB].wJB), JB.setMaterialForRenderPass(this._renderPassIds[BB], void 0 !== IB ? Array.isArray(IB) ? IB[BB] : IB : void 0)
          }
      }
      _freezeActiveMeshes(BB) {
        this._freezeActiveMeshesCancel = (0, zB.f)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, BB)
            for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((BB, IB) => {
          this._freezeActiveMeshesCancel = null, IB ? (kB.d.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), BB && kB.d.Error(BB)) : (kB.d.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), BB && (kB.d.Error(BB), BB.stack && kB.d.Error(BB.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._unFreeze();
        this._isFrozen = !1
      }
      constructor(BB, IB, ZB) {
        this._unObserveRenderList = null, this._renderListHasChanged = (BB, IB) => {
          const ZB = this._renderList ? this._renderList.length : 0;
          if (0 === IB && ZB > 0 || 0 === ZB)
            for (const TB of this._scene.meshes) TB._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new TB.b, this.onAfterRenderObservable = new TB.b, this.onBeforeRenderingManagerRenderObservable = new TB.b, this.onAfterRenderingManagerRenderObservable = new TB.b, this.onInitRenderingObservable = new TB.b, this.onFinishRenderingObservable = new TB.b, this.onFastPathRenderObservable = new TB.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new FB.g(256), this._activeBoundingBoxes = new FB.g(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = BB, this._scene = IB, this._engine = this._scene.PN(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...ZB
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new nB.e(IB), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const BB of this._scene.lights) BB.getTypeID() === NB.d.LIGHTTYPEID_CLUSTERED_CONTAINER && BB.isSupported && BB._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let BB = 0; BB < this.options.numPasses; ++BB) this._engine.releaseRenderPassId(this._renderPassIds[BB]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let BB = 0; BB < this.options.numPasses; ++BB) this._renderPassIds[BB] = this._engine.createRenderPassId(`${this.name}#${BB}`)
      }
      _createSceneUBO(BB, IB) {
        const ZB = this._scene.PN(),
          TB = new cB.d(ZB, void 0, IB, BB, void 0, !1);
        return TB.addUniform("viewProjection", 16), IB && TB.addUniform("viewProjectionR", 16), TB.addUniform("view", 16), TB.addUniform("projection", 16), TB.addUniform("vEyePosition", 4), TB.addUniform("inverseProjection", 16), TB
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const BB = this._engine._currentRenderTarget,
          IB = !(!BB || !BB.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const BB = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${BB} for ${this.name}`, IB)), this._sceneUBOIsMultiview.push(IB)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== IB && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, IB), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = IB);
        const ZB = this._sceneUBOs[this._currentSceneUBOIndex++];
        return ZB.unbindEffect(), ZB
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(BB) {
        this._refreshRate = BB, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(BB, IB) {
        this.prepareRenderList(), this.initRender(BB, IB);
        const ZB = this._checkReadiness();
        return this.finishRender(), ZB
      }
      prepareRenderList() {
        const BB = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let IB = 0; IB < this._waitingRenderList.length; IB++) {
              const ZB = this._waitingRenderList[IB],
                TB = BB.getMeshById(ZB);
              TB && this.renderList.push(TB)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const BB = this._scene.meshes;
          for (let IB = 0; IB < BB.length; IB++) {
            const ZB = BB[IB];
            this.renderListPredicate(ZB) && this.renderList.push(ZB)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(BB, IB) {
        const ZB = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), ZB && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(ZB.getViewMatrix(), ZB.getProjectionMatrix(!0)), this._scene._activeCamera = ZB, this._engine.setViewport(ZB.rigParent ? ZB.rigParent.viewport : ZB.viewport, BB, IB)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const BB = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (BB.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), BB._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== BB.activeCamera && BB.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), BB.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[BB], this.onBeforeRenderObservable.notifyObservers(BB);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(BB);
        else {
          const IB = this._prepareRenderingManager(BB),
            ZB = this._scene.getOutlineRenderer?.(),
            TB = ZB?.enabled;
          ZB && (ZB.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(BB), this._renderingManager.render(this.customRenderFunction, IB, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(BB), ZB && (ZB.enabled = TB)
        }
        IB || this.onAfterRenderObservable.notifyObservers(BB), this._engine.currentRenderPassId = ZB
      }
      _checkReadiness() {
        const BB = this._scene,
          IB = this._engine.currentRenderPassId;
        let ZB = !0;
        BB.getViewMatrix() || BB.updateTransformMatrix();
        const TB = this.options.numPasses;
        for (let JB = 0; JB < TB && ZB; JB++) {
          const IB = this.renderList ? this.renderList : BB.frameGraph ? BB.meshes : BB.getActiveMeshes().data,
            oB = this.renderList || BB.frameGraph ? IB.length : BB.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[JB], this.onBeforeRenderObservable.notifyObservers(JB);
          let GB = null,
            vB = oB;
          this.getCustomRenderList && (GB = this.getCustomRenderList(JB, IB, oB), GB && (vB = GB.length)), GB || (GB = IB), this.options.doNotChangeAspectRatio || BB.updateTransformMatrix(!0);
          for (let BB = 0; BB < vB && ZB; ++BB) {
            const IB = GB[BB];
            if (!IB.isEnabled() || IB.isBlocked || !IB.isVisible || !IB.EW) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(IB, this.refreshRate, !0)) {
                ZB = !1;
                continue
              }
            } else if (!IB.isReady(!0)) {
              ZB = !1;
              continue
            }
            let TB = IB._edgesRenderer,
              JB = IB.hasThinInstances;
            if (IB.vR) {
              const BB = IB.wJB;
              BB.edgesShareWithInstances && BB._edgesRenderer?.isEnabled && (TB = BB._edgesRenderer, JB = !0)
            } else IB.sJB && IB.edgesShareWithInstances && (JB = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && TB?.isEnabled && (TB.isReady(JB) || (ZB = !1))
          }
          if (this.renderParticles && BB.particlesEnabled) {
            const IB = this.particleSystemList || BB.DW;
            for (const BB of IB) BB.isReady() || (ZB = !1)
          }
          if (this.renderSprites && BB.spritesEnabled) {
            const IB = this.spriteManagerList || BB.spriteManagers;
            if (IB)
              for (const TB of IB) BB.activeCamera && 0 === (TB.layerMask & BB.activeCamera.layerMask) || TB.isReady && !TB.isReady() && (ZB = !1)
          }
          this.onAfterRenderObservable.notifyObservers(JB), TB > 1 && (BB.incrementRenderId(), BB.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = IB, ZB
      }
      _prepareRenderingManager() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = this._scene;
        let TB, JB, oB = null;
        const GB = this.renderList ? this.renderList : ZB.frameGraph ? ZB.meshes : ZB.getActiveMeshes().data,
          vB = this.renderList || ZB.frameGraph ? GB.length : ZB.getActiveMeshes().length;
        if (this.getCustomRenderList && (oB = this.getCustomRenderList(BB, GB, vB)), oB) TB = oB.length, JB = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !IB && !this._engine.isWebGPU) return GB;
          this._defaultRenderListPrepared = !0, oB = GB, TB = vB, JB = !this.renderList || this.forceLayerMaskCheck
        }
        const kB = ZB.activeCamera,
          cB = this.cameraForLOD ?? kB,
          nB = ZB.getBoundingBoxRenderer?.();
        if (ZB._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && nB) {
            nB.reset();
            for (let BB = 0; BB < this._activeBoundingBoxes.length; BB++) {
              const IB = this._activeBoundingBoxes.data[BB];
              nB.renderList.push(IB)
            }
          }
          return oB
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), nB && nB.reset(), this.renderMeshes) {
          const BB = ZB.getRenderId(),
            IB = ZB.getFrameId();
          for (let GB = 0; GB < TB; GB++) {
            const TB = oB[GB];
            if (TB && !TB.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(TB, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!TB.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let oB, GB;
              if (cB) {
                const BB = TB._internalAbstractMeshDataInfo._currentLOD.get(cB);
                BB && BB[1] === IB ? oB = BB[0] : (oB = ZB.customLODSelector ? ZB.customLODSelector(TB, cB) : TB.getLOD(cB), BB ? (BB[0] = oB, BB[1] = IB) : TB._internalAbstractMeshDataInfo._currentLOD.set(cB, [oB, IB]))
              } else oB = TB;
              if (!oB) continue;
              if (oB !== TB && 0 !== oB.billboardMode && oB.computeWorldMatrix(), oB._preActivateForIntermediateRendering(BB), GB = !(!JB || !kB) && 0 === (TB.layerMask & kB.layerMask), TB.isEnabled() && TB.isVisible && TB.EW && !GB) {
                if (this._activeMeshes.push(TB), oB._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, oB !== TB && oB._activate(BB, !0), this.enableBoundingBoxRendering && nB && nB._preActiveMesh(TB), TB._activate(BB, !0) && TB.EW.length) {
                  TB.vR ? TB._internalAbstractMeshDataInfo._actAsRegularMesh && (oB = TB) : oB._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, oB._internalAbstractMeshDataInfo._isActiveIntermediate = !0, ZB._prepareSkeleton(oB);
                  for (let BB = 0; BB < oB.EW.length; BB++) {
                    const IB = oB.EW[BB];
                    this.enableBoundingBoxRendering && nB && nB._evaluateSubMesh(TB, IB), this._renderingManager.dispatch(IB, oB)
                  }
                }
                TB._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && nB && IB)
          for (let hB = 0; hB < nB.renderList.length; hB++) {
            const BB = nB.renderList.data[hB];
            this._activeBoundingBoxes.push(BB)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const BB = this.particleSystemList || ZB.DW;
          for (let IB = 0; IB < BB.length; IB++) {
            const ZB = BB[IB],
              TB = ZB.emitter;
            ZB.isStarted() && TB && (!TB.position || TB.isEnabled()) && this._renderingManager.dispatchParticles(ZB)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return oB
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(BB, IB, ZB, TB)
      }
      setRenderingAutoClearDepthStencil(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(BB, IB, ZB, TB), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const BB = new gB(this.name, this._scene, this.options);
        return this.renderList && (BB.renderList = this.renderList.slice(0)), BB
      }
      dispose() {
        const BB = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          IB = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let ZB = 0; ZB < IB; ZB++) {
          const IB = BB[ZB];
          IB && void 0 !== IB.getMaterialForRenderPass(this.renderPassId) && IB.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const ZB of this._sceneUBOs) ZB.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === gB.REFRESHRATE_RENDER_ONCE && (this.refreshRate = gB.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    gB.REFRESHRATE_RENDER_ONCE = 0, gB.REFRESHRATE_RENDER_ONEVERYFRAME = 1, gB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var qB = ZB(39931);
    class yB extends oB.e {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(BB) {
        this._objectRenderer.renderListPredicate = BB
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(BB) {
        this._objectRenderer.renderList = BB
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(BB) {
        this._objectRenderer.particleSystemList = BB
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(BB) {
        this._objectRenderer.getCustomRenderList = BB
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(BB) {
        this._objectRenderer.renderParticles = BB
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(BB) {
        this._objectRenderer.renderSprites = BB
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(BB) {
        this._objectRenderer.enableBoundingBoxRendering = BB
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(BB) {
        this._objectRenderer.enableOutlineRendering = BB
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(BB) {
        this._objectRenderer.forceLayerMaskCheck = BB
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(BB) {
        this._objectRenderer.activeCamera = BB
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(BB) {
        this._objectRenderer.cameraForLOD = BB
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(BB) {
        this._objectRenderer.disableImageProcessing = BB
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(BB) {
        this._objectRenderer.customIsReadyFunction = BB
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(BB) {
        this._objectRenderer.customRenderFunction = BB
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(BB) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(BB)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(BB) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(BB)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(BB) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(BB)
      }
      set onClear(BB) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(BB)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(BB) {
        this._objectRenderer._waitingRenderList = BB
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
      setMaterialForRendering(BB, IB) {
        this._objectRenderer.setMaterialForRendering(BB, IB)
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
      set boundingBoxSize(BB) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(BB)) return;
        this._boundingBoxSize = BB;
        const IB = this.JR();
        IB && IB.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(BB, IB, ZB) {
        let GB, vB, cB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          hB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          zB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          FB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : oB.e.TRILINEAR_SAMPLINGMODE,
          NB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          qB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          yB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          UB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          WB = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          dB = arguments.length > 13 ? arguments[13] : void 0,
          CB = arguments.length > 14 ? arguments[14] : void 0,
          QB = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          sB = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          wB = !0,
          OB = !1;
        if ("object" === typeof cB) {
          const BB = cB;
          cB = !!BB.generateMipMaps, nB = BB.doNotChangeAspectRatio ?? !0, hB = BB.type ?? 0, zB = !!BB.isCube, FB = BB.samplingMode ?? oB.e.TRILINEAR_SAMPLINGMODE, NB = BB.generateDepthBuffer ?? !0, qB = !!BB.generateStencilBuffer, yB = !!BB.isMulti, UB = BB.format ?? 5, WB = !!BB.delayAllocation, dB = BB.samples, CB = BB.creationFlags, QB = !!BB.noColorAttachment, sB = !!BB.useSRGBBuffer, GB = BB.colorAttachment, wB = BB.gammaSpace ?? wB, vB = BB.existingObjectRenderer, OB = !!BB.enableClusteredLights
        }
        if (super(null, ZB, !cB, void 0, FB, void 0, void 0, void 0, void 0, UB), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new TB.b, this.onAfterUnbindObservable = new TB.b, this.onClearObservable = new TB.b, this.onResizeObservable = new TB.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = JB.s.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(ZB = this.JR())) return;
        const YB = this.JR().PN();
        this._gammaSpace = wB, this._coordinatesMode = oB.e.PROJECTION_MODE, this.name = BB, this.isRenderTarget = !0, this._initialSizeParameter = IB, this._dontDisposeObjectRenderer = !!vB, this._processSizeParameter(IB), this._objectRenderer = vB ?? new gB(BB, ZB, {
          numPasses: zB ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: nB,
          enableClusteredLights: OB
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const BB = this._scene;
          if (!this._disableEngineStages)
            for (const IB of BB._beforeRenderTargetClearStage) IB.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(YB) : this.skipInitialClear || YB.clear(this.clearColor ?? BB.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || BB.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const IB of BB._beforeRenderTargetDrawStage) IB.action(this, this._currentFaceIndex, this._currentLayer);
          YB._debugPushGroup && YB._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (YB._debugPopGroup && YB._debugPopGroup(), !this._disableEngineStages)
            for (const IB of this._scene._afterRenderTargetDrawStage) IB.action(this, this._currentFaceIndex, this._currentLayer);
          const BB = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const IB of this._scene._afterRenderTargetPostProcessStage) IB.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = BB), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), YB) : kB.d.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(YB) : this.skipInitialClear || YB.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = YB.onResizeObservable.add((() => {})), this._generateMipMaps = !!cB, this._doNotChangeAspectRatio = nB, yB || (this._renderTargetOptions = {
          generateMipMaps: cB,
          type: hB,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: NB,
          generateStencilBuffer: qB,
          samples: dB,
          creationFlags: CB,
          noColorAttachment: QB,
          useSRGBBuffer: sB,
          colorAttachment: GB,
          label: this.name
        }, this.samplingMode === oB.e.NEAREST_SAMPLINGMODE && (this.wrapU = oB.e.CLAMP_ADDRESSMODE, this.wrapV = oB.e.CLAMP_ADDRESSMODE), WB || (zB ? (this._renderTarget = ZB.PN().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = oB.e.INVCUBIC_MODE, this._textureMatrix = JB.b.Identity()) : this._renderTarget = ZB.PN().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== dB && (this.samples = dB)))
      }
      createDepthStencilTexture() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          oB = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(BB, IB, ZB, TB, JB, oB)
      }
      _processSizeParameter(BB) {
        if (BB.ratio) {
          this._sizeRatio = BB.ratio;
          const IB = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(IB.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(IB.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = BB
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(BB) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(BB))
      }
      addPostProcess(BB) {
        if (!this._postProcessManager) {
          const BB = this.JR();
          if (!BB) return;
          this._postProcessManager = new GB.b(BB), this._postProcesses = new Array
        }
        this._postProcesses.push(BB), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (BB)
            for (const BB of this._postProcesses) BB.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(BB) {
        if (!this._postProcesses) return;
        const IB = this._postProcesses.indexOf(BB); - 1 !== IB && (this._postProcesses.splice(IB, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(BB) {
        this._objectRenderer.refreshRate = BB
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
        const BB = this._size.layers;
        if (BB) return BB;
        const IB = this._size.depth;
        return IB || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(BB) {
        const IB = Math.max(1, this.getRenderSize() * BB);
        this.resize(IB)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(BB) {
        const IB = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const ZB = this.JR();
        ZB && (this._processSizeParameter(BB), this._renderTarget = IB ? ZB.PN().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : ZB.PN().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(BB, IB)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => ZB(41862))).then((BB => this._dumpTools = BB))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const BB = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), BB
      }
      _render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = this.JR();
        if (!ZB) return;
        void 0 !== this.useCameraPostProcesses && (BB = this.useCameraPostProcesses);
        const TB = ZB.PN();
        if (TB._debugPushGroup && TB._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let JB = 0; JB < 6; JB++) this._renderToTarget(JB, BB, IB), ZB.incrementRenderId(), ZB.resetCachedMaterial();
          else this._renderToTarget(0, BB, IB);
        else
          for (let JB = 0; JB < this.getRenderLayers(); JB++) this._renderToTarget(0, BB, IB, JB), ZB.incrementRenderId(), ZB.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), TB._debugPopGroup && TB._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(BB, IB) {
        const ZB = BB * IB,
          TB = (0, vB.p)(ZB + 16384 / (128 + ZB));
        return Math.min((0, vB.d)(BB), TB)
      }
      _bindFrameBuffer() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZB = this.JR();
        if (!ZB) return;
        const TB = ZB.PN();
        this._renderTarget && TB.bindFramebuffer(this._renderTarget, this.isCube ? BB : void 0, void 0, void 0, this.ignoreCameraViewport, 0, IB)
      }
      _unbindFrameBuffer(BB, IB) {
        this._renderTarget && BB.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(IB)
        }))
      }
      _prepareFrame(BB, IB, ZB, TB) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(IB, ZB) : TB && BB.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(IB, ZB)
      }
      _renderToTarget(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const JB = this.JR();
        if (!JB) return;
        const oB = JB.PN();
        this._currentFaceIndex = BB, this._currentLayer = TB, this._currentUseCameraPostProcess = IB, this._currentDumpForDebug = ZB, this._prepareFrame(JB, BB, TB, IB), this._objectRenderer.render(BB + TB, !0), this._unbindFrameBuffer(oB, BB), this._texture && this.isCube && 5 === BB && oB.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(BB, IB, ZB, TB)
      }
      setRenderingAutoClearDepthStencil(BB, IB) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(BB, IB)
      }
      clone() {
        const BB = this.getSize(),
          IB = new yB(this.name, BB, this.JR(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return IB.hasAlpha = this.hasAlpha, IB.level = this.level, IB.coordinatesMode = this.coordinatesMode, this.renderList && (IB.renderList = this.renderList.slice(0)), IB
      }
      serialize() {
        if (!this.name) return null;
        const BB = super.serialize();
        if (BB.renderTargetSize = this.getRenderSize(), BB.renderList = [], this.renderList)
          for (let IB = 0; IB < this.renderList.length; IB++) BB.renderList.push(this.renderList[IB].id);
        return BB
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.JR().PN().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const BB = this.JR();
        if (!BB) return;
        let IB = BB.customRenderTargets.indexOf(this);
        IB >= 0 && BB.customRenderTargets.splice(IB, 1);
        for (const ZB of BB.cameras) IB = ZB.customRenderTargets.indexOf(this), IB >= 0 && ZB.customRenderTargets.splice(IB, 1);
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
    yB.REFRESHRATE_RENDER_ONCE = gB.REFRESHRATE_RENDER_ONCE, yB.REFRESHRATE_RENDER_ONEVERYFRAME = gB.REFRESHRATE_RENDER_ONEVERYFRAME, yB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = gB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(yB.prototype, "noPrePassRenderer") || Object.defineProperty(yB.prototype, "noPrePassRenderer", (0, qB.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41825: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => cB,
      f: () => nB
    });
    var TB = ZB(40188),
      JB = ZB(38151),
      oB = ZB(37153),
      GB = ZB(39902),
      vB = ZB(40369);
    const kB = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class cB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kB;
        this._fullscreenViewport = new JB.c(0, 0, 1, 1);
        const ZB = IB.positions ?? kB.positions,
          oB = IB.indices ?? kB.indices;
        this.engine = BB, this._vertexBuffers = {
          [TB.i.PositionKind]: new TB.i(BB, ZB, TB.i.PositionKind, !1, !1, 2)
        }, this._indexBuffer = BB.createIndexBuffer(oB), this._indexBufferLength = oB.length, this._onContextRestoredObserver = BB.jN.add((() => {
          this._indexBuffer = BB.createIndexBuffer(oB);
          for (const BB in this._vertexBuffers) {
            this._vertexBuffers[BB]._rebuild()
          }
        }))
      }
      setViewport() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(BB)
      }
      bindBuffers(BB) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, BB)
      }
      applyEffectWrapper(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = IB, this.engine.stencilState.stencilTest = ZB, this.engine.enableEffect(BB.drawWrapper), this.bindBuffers(BB.effect), BB.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(BB) {
        return void 0 !== BB.renderTarget
      }
      render(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!BB.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const ZB = null === IB ? null : this._isRenderTargetTexture(IB) ? IB.renderTarget : IB;
        ZB && this.engine.bindFramebuffer(ZB), this.applyEffectWrapper(BB), this.draw(), ZB && this.engine.unBindFramebuffer(ZB), this.restoreStates()
      }
      dispose() {
        const BB = this._vertexBuffers[TB.i.PositionKind];
        BB && (BB.dispose(), delete this._vertexBuffers[TB.i.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.jN.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class nB {
      static RegisterShaderCodeProcessing(BB, IB) {
        IB ? nB._CustomShaderCodeProcessing[BB ?? ""] = IB : delete nB._CustomShaderCodeProcessing[BB ?? ""]
      }
      static _GetShaderCodeProcessing(BB) {
        return nB._CustomShaderCodeProcessing[BB] ?? nB._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(BB) {
        this.options.name = BB
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
      set effect(BB) {
        this._drawWrapper.effect = BB
      }
      constructor(BB) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new oB.b(void 0, !0), this.onApplyObservable = new oB.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...BB,
          name: BB.name || "effectWrapper",
          engine: BB.engine,
          uniforms: BB.uniforms || BB.uniformNames || [],
          uniformNames: void 0,
          samplers: BB.samplers || BB.samplerNames || [],
          samplerNames: void 0,
          attributeNames: BB.attributeNames || ["position"],
          uniformBuffers: BB.uniformBuffers || [],
          defines: BB.defines || "",
          useShaderStore: BB.useShaderStore || !1,
          vertexUrl: BB.vertexUrl || BB.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: BB.fragmentShader || "pass",
          indexParameters: BB.indexParameters,
          blockCompilation: BB.blockCompilation || !1,
          shaderLanguage: BB.shaderLanguage || 0,
          onCompiled: BB.onCompiled || void 0,
          extraInitializations: BB.extraInitializations || void 0,
          extraInitializationsAsync: BB.extraInitializationsAsync || void 0,
          useAsPostProcess: BB.useAsPostProcess ?? !1,
          allowEmptySourceTexture: BB.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), BB.vertexUrl || BB.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.jN.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new vB.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const IB = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, IB, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          TB = arguments.length > 2 ? arguments[2] : void 0,
          JB = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, JB && this._importPromises.push(...JB);
        const oB = this.options.engine.isWebGPU && !nB.ForceGLSL;
        this._gatherImports(oB, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(oB && this._webGPUReady ? ZB.e(368).then((() => ZB(61436))) : ZB.e(358).then((() => ZB(61317)))), void 0 !== TB && TB(oB, this._importPromises), oB && this._webGPUReady && (this.options.shaderLanguage = 1), BB || this.updateEffect(IB)
      }
      updateEffect() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          TB = arguments.length > 3 ? arguments[3] : void 0,
          JB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 ? arguments[5] : void 0,
          vB = arguments.length > 6 ? arguments[6] : void 0,
          kB = arguments.length > 7 ? arguments[7] : void 0;
        const cB = nB._GetShaderCodeProcessing(this.name);
        if (cB?.defineCustomBindings) {
          const TB = IB?.slice() ?? [];
          TB.push(...this.options.uniforms);
          const JB = ZB?.slice() ?? [];
          JB.push(...this.options.samplers), BB = cB.defineCustomBindings(this.name, BB, TB, JB), IB = TB, ZB = JB
        }
        this.options.defines = BB || "";
        const hB = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let zB;
        zB = this.options.extraInitializationsAsync ? async () => {
          await (hB?.()), await this.options.extraInitializationsAsync()
        }: hB, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: vB ?? this._shaderPath.vertex,
          fragment: kB ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: IB || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: ZB || this.options.samplers,
          defines: null !== BB ? BB : "",
          fallbacks: null,
          onCompiled: JB ?? this.options.onCompiled,
          onError: oB ?? null,
          indexParameters: TB || this.options.indexParameters,
          processCodeAfterIncludes: cB?.processCodeAfterIncludes ? (BB, IB) => cB.processCodeAfterIncludes(this.name, BB, IB) : null,
          processFinalCode: cB?.processFinalCode ? (BB, IB) => cB.processFinalCode(this.name, BB, IB) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: zB
        }, this.options.engine) : this._drawWrapper.effect = new GB.d(this._shaderPath, this.options.attributeNames, IB || this.options.uniforms, ZB || this.options.samplerNames, this.options.engine, BB, void 0, JB || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, zB), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !BB && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), nB._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.PN().jN.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    nB.ForceGLSL = !1, nB._CustomShaderCodeProcessing = {}
  },
  41862: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      Dispose: () => UB,
      DumpData: () => yB,
      DumpDataAsync: () => qB,
      DumpFramebuffer: () => gB,
      DumpTools: () => WB,
      EncodeImageAsync: () => NB,
      RegisterDumpTools: () => CB
    });
    var TB = ZB(40061),
      JB = ZB(41825),
      oB = ZB(40152),
      GB = ZB(37158),
      vB = ZB(37147),
      kB = ZB(38718),
      cB = ZB(40124),
      nB = ZB(40065);
    let hB = null;
    async function zB() {
      return hB || (hB = async function() {
        const BB = vB.e.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        BB instanceof OffscreenCanvas && kB.d.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: IB
        } = await Promise.resolve().then((() => ZB(39895)));
        if (!IB.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const TB = new IB(BB, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        vB.e.Instances.pop(), vB.e.OnEnginesDisposedObservable.add((BB => {
          TB && BB !== TB && !TB.mC && 0 === vB.e.Instances.length && UB()
        })), TB.getCaps().parallelShaderCompile = void 0;
        const oB = new JB.e(TB),
          {
            passPixelShader: GB
          } = await ZB.e(376).then((() => ZB(61482))),
          cB = new JB.f({
            engine: TB,
            name: GB.name,
            fragmentShader: GB.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: BB,
          dumpEngine: {
            engine: TB,
            renderer: oB,
            wrapper: cB
          }
        }
      }()), await hB
    }
    let FB = (() => {
      var BB;
      let IB, ZB = [];
      return BB = class {
        static async EncodeImageAsync(BB, IB, ZB, TB, JB, GB) {
          const vB = await zB(),
            kB = vB.dumpEngine;
          kB.engine.setSize(IB, ZB, !0);
          const cB = kB.engine.createRawTexture(BB, IB, ZB, 5, !1, !JB, 1);
          return kB.renderer.setViewport(), kB.renderer.applyEffectWrapper(kB.wrapper), kB.wrapper.effect._bindTexture("textureSampler", cB), kB.renderer.draw(), cB.dispose(), await new Promise(((BB, IB) => {
            oB.j.ToBlob(vB.canvas, (ZB => {
              ZB ? BB(ZB) : IB(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), TB, GB)
          }))
        }
      }, (() => {
        const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [nB.h], (0, TB.j)(BB, null, IB, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: BB => "EncodeImageAsync" in BB,
            get: BB => BB.EncodeImageAsync
          },
          metadata: JB
        }, null, ZB), JB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JB
        }), (0, TB.l)(BB, ZB)
      })(), BB
    })();
    const NB = FB.EncodeImageAsync;
    async function gB(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        oB = arguments.length > 5 ? arguments[5] : void 0,
        GB = arguments.length > 6 ? arguments[6] : void 0;
      const vB = await ZB.readPixels(0, 0, BB, IB);
      yB(BB, IB, new Uint8Array(vB.buffer), TB, JB, oB, !0, void 0, GB)
    }
    async function qB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        JB = arguments.length > 4 ? arguments[4] : void 0,
        vB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        nB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        hB = arguments.length > 7 ? arguments[7] : void 0;
      if (ZB instanceof Float32Array) {
        const BB = new Uint8Array(ZB.length);
        let IB = ZB.length;
        for (; IB--;) {
          const TB = ZB[IB];
          BB[IB] = Math.round(255 * (0, GB.Clamp)(TB))
        }
        ZB = BB
      }
      const zB = await FB.EncodeImageAsync(ZB, BB, IB, TB, vB, hB);
      void 0 !== JB && oB.j.DownloadBlob(zB, JB), zB.type !== TB && kB.d.Warn(`DumpData: The requested mimeType '${TB}' is not supported. The result has mimeType '${zB.type}' instead.`);
      const NB = await zB.arrayBuffer();
      return nB ? NB : `data:${TB};base64,${(0,cB.h)(NB)}`
    }

    function yB(BB, IB, ZB, TB) {
      let JB = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== JB || TB || (JB = ""), qB(BB, IB, ZB, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", JB, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((BB => {
        TB && TB(BB)
      }))
    }

    function UB() {
      hB && (hB?.then((BB => {
        BB.canvas instanceof HTMLCanvasElement && BB.canvas.remove(), BB.dumpEngine && (BB.dumpEngine.engine.dispose(), BB.dumpEngine.renderer.dispose(), BB.dumpEngine.wrapper.dispose())
      })), hB = null)
    }
    const WB = {
      DumpData: yB,
      DumpDataAsync: qB,
      DumpFramebuffer: gB,
      Dispose: UB
    };
    let dB = !1;

    function CB() {
      if (dB) return;
      dB = !0;
      oB.j.DumpData = yB, oB.j.DumpDataAsync = qB, oB.j.DumpFramebuffer = gB
    }
  },
  41842: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => FB,
      d: () => NB,
      h: () => gB
    });
    var TB = ZB(40521),
      JB = ZB(41851),
      oB = ZB(40061),
      GB = ZB(41821),
      vB = ZB(40085),
      kB = ZB(41858),
      cB = ZB(40065);
    class nB extends GB.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(BB, IB) {
        let ZB = arguments.length > 4 ? arguments[4] : void 0;
        const TB = {
          size: "number" === typeof IB ? IB : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: ZB,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...IB
        };
        super(BB, kB.c.FragmentUrl, {
          effectWrapper: "number" !== typeof IB && IB.effectWrapper ? void 0 : new kB.c(BB, ZB, TB),
          ...TB
        })
      }
      static _Parse(BB, IB, ZB, TB) {
        return vB.b.Parse((() => new nB(BB.name, BB.options, IB, BB.renderTargetSamplingMode, BB._engine, BB.reusable)), BB, ZB, TB)
      }
    }(() => {
      var BB;
      let IB, ZB = GB.d,
        TB = [];
      BB = class extends ZB {
        get face() {
          return this._effectWrapper.face
        }
        set face(BB) {
          this._effectWrapper.face = BB
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(BB, IB) {
          let ZB = arguments.length > 4 ? arguments[4] : void 0;
          const JB = {
            size: "number" === typeof IB ? IB : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: ZB,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...IB
          };
          super(BB, kB.c.FragmentUrl, {
            effectWrapper: "number" !== typeof IB && IB.effectWrapper ? void 0 : new kB.b(BB, ZB, JB),
            ...JB
          }), (0, oB.l)(this, TB)
        }
        static _Parse(IB, ZB, TB, JB) {
          return vB.b.Parse((() => new BB(IB.name, IB.options, ZB, IB.renderTargetSamplingMode, IB._engine, IB.reusable)), IB, TB, JB)
        }
      }, (() => {
        const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZB[Symbol.metadata] ?? null) : void 0;
        IB = [(0, cB.C)()], (0, oB.j)(BB, null, IB, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: BB => "face" in BB,
            get: BB => BB.face
          },
          metadata: JB
        }, null, TB), JB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JB
        })
      })()
    })();
    var hB = ZB(37158),
      zB = ZB(40134);

    function FB(BB, IB, ZB, TB, JB, oB, vB, kB) {
      const cB = IB.PN();
      return IB.isReady = !1, JB = JB ?? IB.samplingMode, TB = TB ?? IB.type, oB = oB ?? IB.format, vB = vB ?? IB.width, kB = kB ?? IB.height, -1 === TB && (TB = 0), new Promise((nB => {
        const hB = new GB.d("postprocess", BB, null, null, 1, null, JB, cB, !1, void 0, TB, void 0, null, !1, oB);
        hB.externalTextureSamplerBinding = !0;
        const zB = cB.createRenderTargetTexture({
          width: vB,
          height: kB
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: JB,
          type: TB,
          format: oB
        });
        hB.onEffectCreatedObservable.addOnce((BB => {
          BB.executeWhenCompiled((() => {
            hB.onApply = BB => {
              BB._bindTexture("textureSampler", IB), BB.setFloat2("scale", 1, 1)
            }, ZB.postProcessManager.directRender([hB], zB, !0), cB.restoreDefaultFramebuffer(), cB._releaseTexture(IB), hB && hB.dispose(), zB._swapAndDie(IB), IB.type = TB, IB.format = 5, IB.isReady = !0, nB(IB)
          }))
        }))
      }))
    }
    async function NB(BB, IB, oB) {
      let vB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        kB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        cB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        nB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(BB) {
        if (BB.isReady()) return;
        if (BB.loadingError) throw new Error(BB.errorObject?.message || `Texture ${BB.name} errored while loading.`);
        const IB = BB.onLoadObservable;
        if (IB) return await new Promise((BB => IB.addOnce((() => BB()))));
        const ZB = BB._texture?.onLoadedObservable;
        if (ZB) return await new Promise((BB => ZB.addOnce((() => BB()))));
        throw new Error(`Cannot determine readiness of texture ${BB.name}.`)
      }(BB);
      const zB = BB.getInternalTexture(),
        FB = BB.is3D || !!zB?.is3D,
        {
          width: NB,
          height: gB
        } = BB.getSize(),
        qB = IB ?? NB,
        yB = oB ?? gB;
      if (cB || FB || function(BB) {
          switch (BB) {
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
        }(BB.textureFormat) || qB !== NB || yB !== gB) {
        if (BB.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${cB?"RTT":"compression"} is not supported.`);
        return await async function(BB, IB, oB, vB, kB) {
          let cB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const nB = BB.JR(),
            hB = nB.PN(),
            zB = BB.getInternalTexture(),
            FB = BB.is3D || !!zB?.is3D;
          let NB;
          if (hB.isWebGPU ? FB ? await ZB.e(372).then((() => ZB(61467))) : BB.isCube ? await ZB.e(373).then((() => ZB(61471))) : await ZB.e(374).then((() => ZB(61473))) : FB ? await ZB.e(369).then((() => ZB(61445))) : BB.isCube ? await ZB.e(370).then((() => ZB(61454))) : await ZB.e(371).then((() => ZB(61460))), FB) NB = new GB.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: TB.e.NEAREST_NEAREST_MIPNEAREST,
            engine: hB,
            shaderLanguage: hB.isWebGPU ? 1 : 0
          });
          else if (BB.isCube) {
            const BB = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            NB = new GB.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: TB.e.NEAREST_NEAREST_MIPNEAREST,
              engine: hB,
              defines: BB[vB],
              shaderLanguage: hB.isWebGPU ? 1 : 0
            })
          } else NB = new GB.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: TB.e.NEAREST_NEAREST_MIPNEAREST,
            engine: hB,
            shaderLanguage: hB.isWebGPU ? 1 : 0
          });
          await new Promise((BB => {
            NB.onEffectCreatedObservable.addOnce((IB => {
              IB.executeWhenCompiled((() => {
                BB(0)
              }))
            }))
          }));
          const gB = new JB.c("temp", {
            width: IB,
            height: oB
          }, nB, !1);
          NB.onApply = function(IB) {
            IB.setTexture("textureSampler", BB), IB.setFloat("lod", kB), IB.setInt("gamma", BB.gammaSpace ? 1 : 0), FB && IB.setFloat("slice", cB)
          };
          try {
            if (gB.renderTarget && zB) {
              const ZB = zB.samplingMode;
              0 !== kB ? BB.updateSamplingMode(TB.e.NEAREST_NEAREST_MIPNEAREST) : BB.updateSamplingMode(TB.e.NEAREST_NEAREST), nB.postProcessManager.directRender([NB], gB.renderTarget, !0), BB.updateSamplingMode(ZB);
              const JB = await hB.readPixels(0, 0, IB, oB),
                GB = new Uint8Array(JB.buffer, JB.byteOffset, JB.byteLength);
              return hB.unBindFramebuffer(gB.renderTarget), GB
            }
            throw Error("Render to texture failed.")
          } finally {
            gB.dispose(), NB.dispose()
          }
        }(BB, qB, yB, vB, kB, nB)
      }
      let UB = await BB.readPixels(vB, kB);
      if (!UB) throw new Error(`Failed to read pixels from texture ${BB.name}.`);
      if (UB instanceof Float32Array) {
        const BB = new Uint8Array(UB.length);
        let IB = UB.length;
        for (; IB--;) {
          const ZB = UB[IB];
          BB[IB] = Math.round(255 * (0, hB.Clamp)(ZB))
        }
        UB = BB
      }
      const WB = qB * yB,
        dB = 4 * WB;
      if (UB.length !== dB) {
        const BB = 0 === WB ? 0 : UB.length / WB;
        if (1 === BB || 2 === BB || 3 === BB) {
          const IB = new Uint8Array(dB);
          for (let ZB = 0, TB = 0, JB = 0; ZB < WB; ZB++, JB += 4) {
            const ZB = UB[TB++];
            if (1 === BB) {
              IB[JB] = ZB, IB[JB + 1] = ZB, IB[JB + 2] = ZB, IB[JB + 3] = 255;
              continue
            }
            const oB = UB[TB++];
            2 !== BB ? (IB[JB] = ZB, IB[JB + 1] = oB, IB[JB + 2] = UB[TB++], IB[JB + 3] = 255) : (IB[JB] = ZB, IB[JB + 1] = oB, IB[JB + 2] = 0, IB[JB + 3] = 255)
          }
          return IB
        }
      }
      return UB
    }
    const gB = {
      CreateResizedCopy: function(BB, IB, ZB) {
        let oB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const GB = BB.JR(),
          vB = GB.PN(),
          kB = new JB.c("resized" + BB.name, {
            width: IB,
            height: ZB
          }, GB, !BB.noMipmap, !0, BB._texture.type, !1, BB.samplingMode, !1);
        kB.wrapU = BB.wrapU, kB.wrapV = BB.wrapV, kB.uOffset = BB.uOffset, kB.vOffset = BB.vOffset, kB.uScale = BB.uScale, kB.vScale = BB.vScale, kB.uAng = BB.uAng, kB.vAng = BB.vAng, kB.wAng = BB.wAng, kB.coordinatesIndex = BB.coordinatesIndex, kB.level = BB.level, kB.anisotropicFilteringLevel = BB.anisotropicFilteringLevel, kB._texture.isReady = !1, BB.wrapU = TB.e.CLAMP_ADDRESSMODE, BB.wrapV = TB.e.CLAMP_ADDRESSMODE;
        const cB = new nB("pass", 1, null, oB ? TB.e.BILINEAR_SAMPLINGMODE : TB.e.NEAREST_SAMPLINGMODE, vB, !1, 0);
        return cB.externalTextureSamplerBinding = !0, cB.onEffectCreatedObservable.addOnce((IB => {
          IB.executeWhenCompiled((() => {
            cB.onApply = function(IB) {
              IB.setTexture("textureSampler", BB)
            };
            const IB = kB.renderTarget;
            IB && (GB.postProcessManager.directRender([cB], IB), vB.unBindFramebuffer(IB), kB.disposeFramebufferObjects(), cB.dispose(), kB.getInternalTexture().isReady = !0)
          }))
        })), kB
      },
      ApplyPostProcess: FB,
      ToHalfFloat: zB.h,
      FromHalfFloat: zB.c,
      GetTextureDataAsync: NB
    }
  },
  41821: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => NB
    });
    var TB = ZB(40061),
      JB = ZB(40163),
      oB = ZB(37153),
      GB = ZB(37120),
      vB = ZB(39902),
      kB = ZB(40065),
      cB = ZB(40085),
      nB = ZB(37170),
      hB = ZB(39951),
      zB = ZB(39993),
      FB = ZB(41825);
    let NB = (() => {
        var BB;
        let IB, vB, hB, NB, gB, yB, UB, WB, dB, CB, QB, sB, wB, OB, YB, iB, pB = [],
          aB = [],
          HB = [],
          MB = [],
          jB = [],
          PB = [],
          RB = [],
          rB = [],
          mB = [],
          XB = [],
          LB = [],
          eB = [],
          uB = [],
          fB = [],
          lB = [],
          AB = [],
          tB = [],
          bB = [],
          xB = [],
          EB = [],
          DB = [],
          KB = [],
          VB = [],
          SB = [],
          BI = [],
          II = [],
          ZI = [],
          TI = [],
          JI = [];
        return BB = class {
          static get ForceGLSL() {
            return FB.f.ForceGLSL
          }
          static set ForceGLSL(BB) {
            FB.f.ForceGLSL = BB
          }
          static RegisterShaderCodeProcessing(BB, IB) {
            FB.f.RegisterShaderCodeProcessing(BB, IB)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(BB) {
            this._effectWrapper.name = BB
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(BB) {
            this._effectWrapper.alphaMode = BB
          }
          get samples() {
            return this._samples
          }
          set samples(BB) {
            this._samples = Math.min(BB, this._engine.getCaps().maxMSAASamples), this._textures.forEach((BB => {
              BB.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(BB) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), BB && (this._onActivateObserver = this.onActivateObservable.add(BB))
          }
          set onSizeChanged(BB) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(BB)
          }
          set onApply(BB) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(BB)
          }
          set onBeforeRender(BB) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(BB)
          }
          set onAfterRender(BB) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(BB)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(BB) {
            this._forcedOutputTexture = BB
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.Z2
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.cBB(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(IB, ZB, vB, kB, cB, nB) {
            let hB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              zB = arguments.length > 7 ? arguments[7] : void 0,
              NB = arguments.length > 8 ? arguments[8] : void 0,
              gB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              yB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              UB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              WB = arguments.length > 12 ? arguments[12] : void 0,
              dB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              CB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              QB = arguments.length > 15 ? arguments[15] : void 0,
              sB = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, TB.l)(this, pB), null), this.uniqueId = (0, TB.l)(this, aB, void 0), this.width = ((0, TB.l)(this, HB), (0, TB.l)(this, MB, -1)), this.height = ((0, TB.l)(this, jB), (0, TB.l)(this, PB, -1)), this.nodeMaterialSource = ((0, TB.l)(this, RB), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, TB.l)(this, rB, void 0), this.clearColor = ((0, TB.l)(this, mB), (0, TB.l)(this, XB, void 0)), this.autoClear = ((0, TB.l)(this, LB), (0, TB.l)(this, eB, !0)), this.forceAutoClearInAlphaMode = ((0, TB.l)(this, uB), (0, TB.l)(this, fB, !1)), this.alphaConstants = ((0, TB.l)(this, lB), (0, TB.l)(this, AB, void 0)), this.animations = ((0, TB.l)(this, tB), []), this.enablePixelPerfectMode = (0, TB.l)(this, bB, !1), this.forceFullscreenViewport = ((0, TB.l)(this, xB), (0, TB.l)(this, EB, !0)), this.inspectableCustomProperties = (0, TB.l)(this, DB), this.scaleMode = (0, TB.l)(this, KB, 1), this.alwaysForcePOT = ((0, TB.l)(this, VB), (0, TB.l)(this, SB, !1)), this._samples = ((0, TB.l)(this, BI), (0, TB.l)(this, II, 1)), this.adaptScaleToCurrentViewport = ((0, TB.l)(this, ZI), (0, TB.l)(this, TI, !1)), this.doNotSerialize = ((0, TB.l)(this, JI), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new JB.g(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new GB.p(1, 1), this._texelSize = GB.p.Zero(), this.onActivateObservable = new oB.b, this.onSizeChangedObservable = new oB.b, this.onApplyObservable = new oB.b, this.onBeforeRenderObservable = new oB.b, this.onAfterRenderObservable = new oB.b, this.oR = new oB.b, qB();
            let wB, OB = 1,
              YB = null;
            if (vB && !Array.isArray(vB)) {
              const BB = vB;
              vB = BB.uniforms ?? null, kB = BB.samplers ?? null, OB = BB.size ?? 1, nB = BB.camera ?? null, hB = BB.samplingMode ?? 1, zB = BB.engine, NB = BB.reusable, gB = Array.isArray(BB.defines) ? BB.defines.join("\n") : BB.defines ?? null, yB = BB.textureType ?? 0, UB = BB.vertexUrl ?? "postprocess", WB = BB.indexParameters, dB = BB.blockCompilation ?? !1, CB = BB.textureFormat ?? 5, QB = BB.shaderLanguage ?? 0, YB = BB.uniformBuffers ?? null, sB = BB.extraInitializations, wB = BB.effectWrapper
            } else cB && (OB = "number" === typeof cB ? cB : {
              width: cB.width,
              height: cB.height
            });
            if (this._useExistingThinPostProcess = !!wB, this._effectWrapper = wB ?? new FB.f({
                name: IB,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: ZB,
                engine: zB || nB?.JR().PN(),
                uniforms: vB,
                samplers: kB,
                uniformBuffers: YB,
                defines: gB,
                vertexUrl: UB,
                indexParameters: WB,
                blockCompilation: !0,
                shaderLanguage: QB,
                extraInitializations: void 0
              }), this.name = IB, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != nB ? (this.Z2 = nB, this._scene = nB.JR(), nB.attachPostProcess(this), this._engine = this._scene.PN(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : zB && (this._engine = zB, this._engine.postProcesses.push(this)), this._options = OB, this.renderTargetSamplingMode = hB || 1, this._reusable = NB || !1, this._textureType = yB, this._textureFormat = CB, this._shaderLanguage = QB || 0, this._samplers = kB || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = ZB, this._vertexUrl = UB, this._parameters = vB || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = YB || [], this._indexParameters = WB, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const IB = [];
              this._gatherImports(this._engine.isWebGPU && !BB.ForceGLSL, IB), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(dB, gB, sB, IB)
            }
          }
          _gatherImports() {
            let BB = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? BB.push(Promise.all([ZB.e(368).then((() => ZB(61436)))])) : BB.push(Promise.all([ZB.e(358).then((() => ZB(61317)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          PN() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(BB) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = BB, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new JB.g(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              TB = arguments.length > 3 ? arguments[3] : void 0,
              JB = arguments.length > 4 ? arguments[4] : void 0,
              oB = arguments.length > 5 ? arguments[5] : void 0,
              GB = arguments.length > 6 ? arguments[6] : void 0,
              vB = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(BB, IB, ZB, TB, JB, oB, GB, vB), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(BB, IB) {
            let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let JB = 0; JB < this._textureCache.length; JB++)
              if (this._textureCache[JB].texture.width === BB.width && this._textureCache[JB].texture.height === BB.height && this._textureCache[JB].postProcessChannel === ZB && this._textureCache[JB].texture._generateDepthBuffer === IB.generateDepthBuffer && this._textureCache[JB].texture.samples === IB.samples) return this._textureCache[JB].texture;
            const TB = this._engine.createRenderTargetTexture(BB, IB);
            return this._textureCache.push({
              texture: TB,
              postProcessChannel: ZB,
              lastUsedRenderId: -1
            }), TB
          }
          _flushTextureCache() {
            const BB = this._renderId;
            for (let IB = this._textureCache.length - 1; IB >= 0; IB--)
              if (BB - this._textureCache[IB].lastUsedRenderId > 100) {
                let BB = !1;
                for (let ZB = 0; ZB < this._textures.length; ZB++)
                  if (this._textures.data[ZB] === this._textureCache[IB].texture) {
                    BB = !0;
                    break
                  } BB || (this._textureCache[IB].texture.dispose(), this._textureCache.splice(IB, 1))
              }
          }
          resize(BB, IB) {
            let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = BB, this.height = IB;
            let oB = null;
            if (ZB)
              for (let kB = 0; kB < ZB._postProcesses.length; kB++)
                if (null !== ZB._postProcesses[kB]) {
                  oB = ZB._postProcesses[kB];
                  break
                } const GB = {
                width: this.width,
                height: this.height
              },
              vB = {
                generateMipMaps: TB,
                generateDepthBuffer: JB || oB === this,
                generateStencilBuffer: (JB || oB === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(GB, vB, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(GB, vB, 1)), this._texelSize.cBB(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let BB;
            if (this._shareOutputWithPostProcess) BB = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) BB = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let IB;
              BB = this.inputTexture;
              for (let ZB = 0; ZB < this._textureCache.length; ZB++)
                if (this._textureCache[ZB].texture === BB) {
                  IB = this._textureCache[ZB];
                  break
                } IB && (IB.lastUsedRenderId = this._renderId)
            }
            return BB
          }
          activate(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZB = arguments.length > 2 ? arguments[2] : void 0;
            const TB = null === BB || void 0 !== BB.cameraRigMode ? BB || this.Z2 : null,
              JB = TB?.JR() ?? BB,
              oB = JB.PN(),
              GB = oB.getCaps().maxTextureSize,
              vB = (IB ? IB.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              kB = (IB ? IB.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let cB = this._options.width || vB,
              nB = this._options.height || kB;
            const hB = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let FB = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const BB = oB.currentViewport;
                BB && (cB *= BB.width, nB *= BB.height)
              }(hB || this.alwaysForcePOT) && (this._options.width || (cB = oB.needPOTTextures ? (0, zB.f)(cB, GB, this.scaleMode) : cB), this._options.height || (nB = oB.needPOTTextures ? (0, zB.f)(nB, GB, this.scaleMode) : nB)), this.width === cB && this.height === nB && (FB = this._getTarget()) || this.resize(cB, nB, TB, hB, ZB), this._textures.forEach((BB => {
                BB.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(BB, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return FB || (FB = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.cBB(vB / cB, kB / nB), this._engine.bindFramebuffer(FB, 0, vB, kB, this.forceFullscreenViewport)) : (this._scaleRatio.cBB(1, 1), this._engine.bindFramebuffer(FB, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(TB), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : JB.clearColor, JB._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), FB
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
            let BB;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.PN().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), BB = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", BB?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let BB = this._textureCache.length - 1; BB >= 0; BB--) this._textureCache[BB].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(BB) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = BB.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(BB) {
            let IB;
            if (BB = BB || this.Z2, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (IB = this._parentContainer.postProcesses.indexOf(this), IB > -1 && this._parentContainer.postProcesses.splice(IB, 1), this._parentContainer = null), IB = this._engine.postProcesses.indexOf(this), -1 !== IB && this._engine.postProcesses.splice(IB, 1), this.oR.notifyObservers(), BB) {
              if (BB.detachPostProcess(this), IB = BB._postProcesses.indexOf(this), 0 === IB && BB._postProcesses.length > 0) {
                const BB = this.Z2._getFirstPostProcess();
                BB && BB.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const BB = cB.b.Serialize(this),
              IB = this.getCamera() || this._scene && this._scene.activeCamera;
            return BB.customType = "BABYLON." + this.getClassName(), BB.cameraId = IB ? IB.id : null, BB.reusable = this._reusable, BB.textureType = this._textureType, BB.fragmentUrl = this._fragmentUrl, BB.parameters = this._parameters, BB.samplers = this._samplers, BB.uniformBuffers = this._uniformBuffers, BB.options = this._options, BB.defines = this._postProcessDefines, BB.textureFormat = this._textureFormat, BB.vertexUrl = this._vertexUrl, BB.indexParameters = this._indexParameters, BB
          }
          clone() {
            const IB = this.serialize();
            IB._engine = this._engine, IB.cameraId = null;
            const ZB = BB.Parse(IB, this._scene, "");
            return ZB ? (ZB.onActivateObservable = this.onActivateObservable.clone(), ZB.onSizeChangedObservable = this.onSizeChangedObservable.clone(), ZB.onApplyObservable = this.onApplyObservable.clone(), ZB.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), ZB.onAfterRenderObservable = this.onAfterRenderObservable.clone(), ZB._prePassEffectConfiguration = this._prePassEffectConfiguration, ZB) : null
          }
          static Parse(BB, IB, ZB) {
            const TB = (0, nB.e)(BB.customType);
            if (!TB || !TB._Parse) return null;
            const JB = IB ? IB.getCameraById(BB.cameraId) : null;
            return TB._Parse(BB, JB, IB, ZB)
          }
          static _Parse(IB, ZB, TB, JB) {
            return cB.b.Parse((() => new BB(IB.name, IB.fragmentUrl, IB.parameters, IB.samplers, IB.options, ZB, IB.renderTargetSamplingMode, IB._engine, IB.reusable, IB.defines, IB.textureType, IB.vertexUrl, IB.indexParameters, !1, IB.textureFormat)), IB, TB, JB)
          }
        }, (() => {
          const ZB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IB = [(0, kB.C)()], vB = [(0, kB.C)()], hB = [(0, kB.C)()], NB = [(0, kB.C)()], gB = [(0, kB.C)()], yB = [(0, kB.m)()], UB = [(0, kB.C)()], WB = [(0, kB.C)()], dB = [(0, kB.C)()], CB = [(0, kB.C)()], QB = [(0, kB.C)()], sB = [(0, kB.C)()], wB = [(0, kB.C)()], OB = [(0, kB.C)()], YB = [(0, kB.C)("samples")], iB = [(0, kB.C)()], (0, TB.j)(BB, null, vB, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name
            },
            metadata: ZB
          }, null, pB), (0, TB.j)(BB, null, dB, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaMode" in BB,
              get: BB => BB.alphaMode
            },
            metadata: ZB
          }, null, pB), (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: BB => "uniqueId" in BB,
              get: BB => BB.uniqueId,
              set: (BB, IB) => {
                BB.uniqueId = IB
              }
            },
            metadata: ZB
          }, aB, HB), (0, TB.j)(null, null, hB, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: BB => "width" in BB,
              get: BB => BB.width,
              set: (BB, IB) => {
                BB.width = IB
              }
            },
            metadata: ZB
          }, MB, jB), (0, TB.j)(null, null, NB, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: BB => "height" in BB,
              get: BB => BB.height,
              set: (BB, IB) => {
                BB.height = IB
              }
            },
            metadata: ZB
          }, PB, RB), (0, TB.j)(null, null, gB, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "renderTargetSamplingMode" in BB,
              get: BB => BB.renderTargetSamplingMode,
              set: (BB, IB) => {
                BB.renderTargetSamplingMode = IB
              }
            },
            metadata: ZB
          }, rB, mB), (0, TB.j)(null, null, yB, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "clearColor" in BB,
              get: BB => BB.clearColor,
              set: (BB, IB) => {
                BB.clearColor = IB
              }
            },
            metadata: ZB
          }, XB, LB), (0, TB.j)(null, null, UB, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoClear" in BB,
              get: BB => BB.autoClear,
              set: (BB, IB) => {
                BB.autoClear = IB
              }
            },
            metadata: ZB
          }, eB, uB), (0, TB.j)(null, null, WB, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceAutoClearInAlphaMode" in BB,
              get: BB => BB.forceAutoClearInAlphaMode,
              set: (BB, IB) => {
                BB.forceAutoClearInAlphaMode = IB
              }
            },
            metadata: ZB
          }, fB, lB), (0, TB.j)(null, null, CB, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaConstants" in BB,
              get: BB => BB.alphaConstants,
              set: (BB, IB) => {
                BB.alphaConstants = IB
              }
            },
            metadata: ZB
          }, AB, tB), (0, TB.j)(null, null, QB, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "enablePixelPerfectMode" in BB,
              get: BB => BB.enablePixelPerfectMode,
              set: (BB, IB) => {
                BB.enablePixelPerfectMode = IB
              }
            },
            metadata: ZB
          }, bB, xB), (0, TB.j)(null, null, sB, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceFullscreenViewport" in BB,
              get: BB => BB.forceFullscreenViewport,
              set: (BB, IB) => {
                BB.forceFullscreenViewport = IB
              }
            },
            metadata: ZB
          }, EB, DB), (0, TB.j)(null, null, wB, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "scaleMode" in BB,
              get: BB => BB.scaleMode,
              set: (BB, IB) => {
                BB.scaleMode = IB
              }
            },
            metadata: ZB
          }, KB, VB), (0, TB.j)(null, null, OB, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: BB => "alwaysForcePOT" in BB,
              get: BB => BB.alwaysForcePOT,
              set: (BB, IB) => {
                BB.alwaysForcePOT = IB
              }
            },
            metadata: ZB
          }, SB, BI), (0, TB.j)(null, null, YB, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: BB => "_samples" in BB,
              get: BB => BB._samples,
              set: (BB, IB) => {
                BB._samples = IB
              }
            },
            metadata: ZB
          }, II, ZI), (0, TB.j)(null, null, iB, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: BB => "adaptScaleToCurrentViewport" in BB,
              get: BB => BB.adaptScaleToCurrentViewport,
              set: (BB, IB) => {
                BB.adaptScaleToCurrentViewport = IB
              }
            },
            metadata: ZB
          }, TI, JI), ZB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ZB
          })
        })(), BB
      })(),
      gB = !1;

    function qB() {
      gB || (gB = !0, hB.c.prototype.setTextureFromPostProcess = function(BB, IB, ZB) {
        let TB = null;
        IB && (IB._forcedOutputTexture ? TB = IB._forcedOutputTexture : IB._textures.data[IB._currentRenderTextureInd] && (TB = IB._textures.data[IB._currentRenderTextureInd])), this._bindTexture(BB, TB?.texture ?? null, ZB)
      }, hB.c.prototype.setTextureFromPostProcessOutput = function(BB, IB, ZB) {
        this._bindTexture(BB, IB?._outputTexture?.texture ?? null, ZB)
      }, vB.d.prototype.setTextureFromPostProcess = function(BB, IB) {
        this._engine.setTextureFromPostProcess(this._samplers[BB], IB, BB)
      }, vB.d.prototype.setTextureFromPostProcessOutput = function(BB, IB) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[BB], IB, BB)
      }, (0, nB.i)("BABYLON.PostProcess", NB))
    }
  },
  41858: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      c: () => oB
    });
    var TB = ZB(41825),
      JB = ZB(37147);
    class oB extends TB.f {
      _gatherImports(BB, IB) {
        BB ? (this._webGPUReady = !0, IB.push(Promise.all([ZB.e(375).then((() => ZB(61477)))]))) : IB.push(Promise.all([ZB.e(376).then((() => ZB(61482)))])), super._gatherImports(BB, IB)
      }
      constructor(BB) {
        let IB = arguments.length > 2 ? arguments[2] : void 0;
        const ZB = {
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || JB.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: oB.FragmentUrl,
          ...IB
        };
        ZB.engine || (ZB.engine = JB.e.LastCreatedEngine), super(ZB)
      }
    }
    oB.FragmentUrl = "pass";
    class GB extends TB.f {
      _gatherImports(BB, IB) {
        BB ? (this._webGPUReady = !0, IB.push(Promise.all([ZB.e(377).then((() => ZB(61485)))]))) : IB.push(Promise.all([ZB.e(378).then((() => ZB(61487)))])), super._gatherImports(BB, IB)
      }
      constructor(BB) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || JB.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: GB.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(BB) {
        if (!(BB < 0 || BB > 5)) switch (this._face = BB, this._face) {
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
    GB.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);