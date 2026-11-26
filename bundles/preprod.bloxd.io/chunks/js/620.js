export const id = 620;
export const ids = [620];
export const modules = {
  44953: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => NB
    });
    var YB = GB(37802),
      DB = GB(37778),
      QB = GB(41470),
      oB = GB(41155),
      jB = GB(40932),
      yB = GB(39366),
      JB = GB(41136),
      MB = GB(41171),
      PB = GB(37785),
      zB = GB(40899),
      lB = GB(41112),
      pB = GB(41211);
    class qB {
      get renderList() {
        return this._renderList
      }
      set renderList(BB) {
        this._renderList !== BB && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), BB && (this._unObserveRenderList = (0, PB.l)(BB, this._renderListHasChanged)), this._renderList = BB)
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
              const OB = this._renderPassIds[BB];
              this._engine._renderPassNames[OB] = `${this._name}#${BB}`
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
      setMaterialForRendering(BB, OB) {
        let GB;
        GB = Array.isArray(BB) ? BB : [BB];
        for (let YB = 0; YB < GB.length; ++YB)
          for (let BB = 0; BB < this.options.numPasses; ++BB) {
            let DB = GB[YB];
            GB[YB].SF && (DB = GB[YB].AQB), DB.setMaterialForRenderPass(this._renderPassIds[BB], void 0 !== OB ? Array.isArray(OB) ? OB[BB] : OB : void 0)
          }
      }
      _freezeActiveMeshes(BB) {
        this._freezeActiveMeshesCancel = (0, zB.d)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, BB)
            for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((BB, OB) => {
          this._freezeActiveMeshesCancel = null, OB ? (yB.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), BB && yB.b.Error(BB)) : (yB.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), BB && (yB.b.Error(BB), BB.stack && yB.b.Error(BB.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._unFreeze();
        this._isFrozen = !1
      }
      constructor(BB, OB, GB) {
        this._unObserveRenderList = null, this._renderListHasChanged = (BB, OB) => {
          const GB = this._renderList ? this._renderList.length : 0;
          if (0 === OB && GB > 0 || 0 === GB)
            for (const YB of this._scene.meshes) YB._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new YB.b, this.onAfterRenderObservable = new YB.b, this.onBeforeRenderingManagerRenderObservable = new YB.b, this.onAfterRenderingManagerRenderObservable = new YB.b, this.onInitRenderingObservable = new YB.b, this.onFinishRenderingObservable = new YB.b, this.onFastPathRenderObservable = new YB.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new lB.d(256), this._activeBoundingBoxes = new lB.d(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = BB, this._scene = OB, this._engine = this._scene.Lp(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...GB
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new MB.b(OB), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const BB of this._scene.lights) BB.getTypeID() === pB.c.LIGHTTYPEID_CLUSTERED_CONTAINER && BB.isSupported && BB._updateBatches(this.activeCamera).render()
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
      _createSceneUBO(BB, OB) {
        const GB = this._scene.Lp(),
          YB = new JB.d(GB, void 0, OB, BB, void 0, !1);
        return YB.addUniform("viewProjection", 16), OB && YB.addUniform("viewProjectionR", 16), YB.addUniform("view", 16), YB.addUniform("projection", 16), YB.addUniform("vEyePosition", 4), YB.addUniform("inverseProjection", 16), YB
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const BB = this._engine._currentRenderTarget,
          OB = !(!BB || !BB.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const BB = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${BB} for ${this.name}`, OB)), this._sceneUBOIsMultiview.push(OB)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== OB && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, OB), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = OB);
        const GB = this._sceneUBOs[this._currentSceneUBOIndex++];
        return GB.unbindEffect(), GB
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
      isReadyForRendering(BB, OB) {
        this.prepareRenderList(), this.initRender(BB, OB);
        const GB = this._checkReadiness();
        return this.finishRender(), GB
      }
      prepareRenderList() {
        const BB = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let OB = 0; OB < this._waitingRenderList.length; OB++) {
              const GB = this._waitingRenderList[OB],
                YB = BB.getMeshById(GB);
              YB && this.renderList.push(YB)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const BB = this._scene.meshes;
          for (let OB = 0; OB < BB.length; OB++) {
            const GB = BB[OB];
            this.renderListPredicate(GB) && this.renderList.push(GB)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(BB, OB) {
        const GB = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), GB && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(GB.getViewMatrix(), GB.getProjectionMatrix(!0)), this._scene._activeCamera = GB, this._engine.setViewport(GB.rigParent ? GB.rigParent.viewport : GB.viewport, BB, OB)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const BB = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (BB.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), BB._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== BB.activeCamera && BB.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), BB.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[BB], this.onBeforeRenderObservable.notifyObservers(BB);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(BB);
        else {
          const OB = this._prepareRenderingManager(BB),
            GB = this._scene.getOutlineRenderer?.(),
            YB = GB?.enabled;
          GB && (GB.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(BB), this._renderingManager.render(this.customRenderFunction, OB, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(BB), GB && (GB.enabled = YB)
        }
        OB || this.onAfterRenderObservable.notifyObservers(BB), this._engine.currentRenderPassId = GB
      }
      _checkReadiness() {
        const BB = this._scene,
          OB = this._engine.currentRenderPassId;
        let GB = !0;
        BB.getViewMatrix() || BB.updateTransformMatrix();
        const YB = this.options.numPasses;
        for (let DB = 0; DB < YB && GB; DB++) {
          const OB = this.renderList ? this.renderList : BB.frameGraph ? BB.meshes : BB.getActiveMeshes().data,
            QB = this.renderList || BB.frameGraph ? OB.length : BB.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[DB], this.onBeforeRenderObservable.notifyObservers(DB);
          let oB = null,
            jB = QB;
          this.getCustomRenderList && (oB = this.getCustomRenderList(DB, OB, QB), oB && (jB = oB.length)), oB || (oB = OB), this.options.doNotChangeAspectRatio || BB.updateTransformMatrix(!0);
          for (let BB = 0; BB < jB && GB; ++BB) {
            const OB = oB[BB];
            if (!OB.isEnabled() || OB.isBlocked || !OB.isVisible || !OB.iW) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(OB, this.refreshRate, !0)) {
                GB = !1;
                continue
              }
            } else if (!OB.isReady(!0)) {
              GB = !1;
              continue
            }
            let YB = OB._edgesRenderer,
              DB = OB.hasThinInstances;
            if (OB.SF) {
              const BB = OB.AQB;
              BB.edgesShareWithInstances && BB._edgesRenderer?.isEnabled && (YB = BB._edgesRenderer, DB = !0)
            } else OB.WQB && OB.edgesShareWithInstances && (DB = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && YB?.isEnabled && (YB.isReady(DB) || (GB = !1))
          }
          if (this.renderParticles && BB.particlesEnabled) {
            const OB = this.particleSystemList || BB.rW;
            for (const BB of OB) BB.isReady() || (GB = !1)
          }
          if (this.renderSprites && BB.spritesEnabled) {
            const OB = this.spriteManagerList || BB.spriteManagers;
            if (OB)
              for (const YB of OB) BB.activeCamera && 0 === (YB.layerMask & BB.activeCamera.layerMask) || YB.isReady && !YB.isReady() && (GB = !1)
          }
          this.onAfterRenderObservable.notifyObservers(DB), YB > 1 && (BB.incrementRenderId(), BB.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = OB, GB
      }
      _prepareRenderingManager() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = this._scene;
        let YB, DB, QB = null;
        const oB = this.renderList ? this.renderList : GB.frameGraph ? GB.meshes : GB.getActiveMeshes().data,
          jB = this.renderList || GB.frameGraph ? oB.length : GB.getActiveMeshes().length;
        if (this.getCustomRenderList && (QB = this.getCustomRenderList(BB, oB, jB)), QB) YB = QB.length, DB = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !OB && !this._engine.isWebGPU) return oB;
          this._defaultRenderListPrepared = !0, QB = oB, YB = jB, DB = !this.renderList || this.forceLayerMaskCheck
        }
        const yB = GB.activeCamera,
          JB = this.cameraForLOD ?? yB,
          MB = GB.getBoundingBoxRenderer?.();
        if (GB._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && MB) {
            MB.reset();
            for (let BB = 0; BB < this._activeBoundingBoxes.length; BB++) {
              const OB = this._activeBoundingBoxes.data[BB];
              MB.renderList.push(OB)
            }
          }
          return QB
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), MB && MB.reset(), this.renderMeshes) {
          const BB = GB.getRenderId(),
            OB = GB.getFrameId();
          for (let oB = 0; oB < YB; oB++) {
            const YB = QB[oB];
            if (YB && !YB.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(YB, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!YB.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let QB, oB;
              if (JB) {
                const BB = YB._internalAbstractMeshDataInfo._currentLOD.get(JB);
                BB && BB[1] === OB ? QB = BB[0] : (QB = GB.customLODSelector ? GB.customLODSelector(YB, JB) : YB.getLOD(JB), BB ? (BB[0] = QB, BB[1] = OB) : YB._internalAbstractMeshDataInfo._currentLOD.set(JB, [QB, OB]))
              } else QB = YB;
              if (!QB) continue;
              if (QB !== YB && 0 !== QB.billboardMode && QB.computeWorldMatrix(), QB._preActivateForIntermediateRendering(BB), oB = !(!DB || !yB) && 0 === (YB.layerMask & yB.layerMask), YB.isEnabled() && YB.isVisible && YB.iW && !oB) {
                if (this._activeMeshes.push(YB), QB._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, QB !== YB && QB._activate(BB, !0), this.enableBoundingBoxRendering && MB && MB._preActiveMesh(YB), YB._activate(BB, !0) && YB.iW.length) {
                  YB.SF ? YB._internalAbstractMeshDataInfo._actAsRegularMesh && (QB = YB) : QB._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, QB._internalAbstractMeshDataInfo._isActiveIntermediate = !0, GB._prepareSkeleton(QB);
                  for (let BB = 0; BB < QB.iW.length; BB++) {
                    const OB = QB.iW[BB];
                    this.enableBoundingBoxRendering && MB && MB._evaluateSubMesh(YB, OB), this._renderingManager.dispatch(OB, QB)
                  }
                }
                YB._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && MB && OB)
          for (let PB = 0; PB < MB.renderList.length; PB++) {
            const BB = MB.renderList.data[PB];
            this._activeBoundingBoxes.push(BB)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const BB = this.particleSystemList || GB.rW;
          for (let OB = 0; OB < BB.length; OB++) {
            const GB = BB[OB],
              YB = GB.emitter;
            GB.isStarted() && YB && (!YB.position || YB.isEnabled()) && this._renderingManager.dispatchParticles(GB)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return QB
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(BB, OB, GB, YB)
      }
      setRenderingAutoClearDepthStencil(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(BB, OB, GB, YB), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const BB = new qB(this.name, this._scene, this.options);
        return this.renderList && (BB.renderList = this.renderList.slice(0)), BB
      }
      dispose() {
        const BB = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          OB = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let GB = 0; GB < OB; GB++) {
          const OB = BB[GB];
          OB && void 0 !== OB.getMaterialForRenderPass(this.renderPassId) && OB.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const GB of this._sceneUBOs) GB.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === qB.REFRESHRATE_RENDER_ONCE && (this.refreshRate = qB.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    qB.REFRESHRATE_RENDER_ONCE = 0, qB.REFRESHRATE_RENDER_ONEVERYFRAME = 1, qB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var ZB = GB(40890);
    class NB extends QB.e {
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
      setMaterialForRendering(BB, OB) {
        this._objectRenderer.setMaterialForRendering(BB, OB)
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
        const OB = this.JF();
        OB && OB.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(BB, OB, GB) {
        let oB, jB, JB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          MB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          PB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          zB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          lB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : QB.e.TRILINEAR_SAMPLINGMODE,
          pB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          ZB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          NB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          RB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          WB = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          AB = arguments.length > 13 ? arguments[13] : void 0,
          VB = arguments.length > 14 ? arguments[14] : void 0,
          SB = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          nB = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          UB = !0,
          fB = !1;
        if ("object" === typeof JB) {
          const BB = JB;
          JB = !!BB.generateMipMaps, MB = BB.doNotChangeAspectRatio ?? !0, PB = BB.type ?? 0, zB = !!BB.isCube, lB = BB.samplingMode ?? QB.e.TRILINEAR_SAMPLINGMODE, pB = BB.generateDepthBuffer ?? !0, ZB = !!BB.generateStencilBuffer, NB = !!BB.isMulti, RB = BB.format ?? 5, WB = !!BB.delayAllocation, AB = BB.samples, VB = BB.creationFlags, SB = !!BB.noColorAttachment, nB = !!BB.useSRGBBuffer, oB = BB.colorAttachment, UB = BB.gammaSpace ?? UB, jB = BB.existingObjectRenderer, fB = !!BB.enableClusteredLights
        }
        if (super(null, GB, !JB, void 0, lB, void 0, void 0, void 0, void 0, RB), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new YB.b, this.onAfterUnbindObservable = new YB.b, this.onClearObservable = new YB.b, this.onResizeObservable = new YB.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = DB.r.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(GB = this.JF())) return;
        const kB = this.JF().Lp();
        this._gammaSpace = UB, this._coordinatesMode = QB.e.PROJECTION_MODE, this.name = BB, this.isRenderTarget = !0, this._initialSizeParameter = OB, this._dontDisposeObjectRenderer = !!jB, this._processSizeParameter(OB), this._objectRenderer = jB ?? new qB(BB, GB, {
          numPasses: zB ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: MB,
          enableClusteredLights: fB
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const BB = this._scene;
          if (!this._disableEngineStages)
            for (const OB of BB._beforeRenderTargetClearStage) OB.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(kB) : this.skipInitialClear || kB.clear(this.clearColor ?? BB.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || BB.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const OB of BB._beforeRenderTargetDrawStage) OB.action(this, this._currentFaceIndex, this._currentLayer);
          kB._debugPushGroup && kB._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (kB._debugPopGroup && kB._debugPopGroup(), !this._disableEngineStages)
            for (const OB of this._scene._afterRenderTargetDrawStage) OB.action(this, this._currentFaceIndex, this._currentLayer);
          const BB = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const OB of this._scene._afterRenderTargetPostProcessStage) OB.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = BB), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), kB) : yB.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(kB) : this.skipInitialClear || kB.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = kB.onResizeObservable.add((() => {})), this._generateMipMaps = !!JB, this._doNotChangeAspectRatio = MB, NB || (this._renderTargetOptions = {
          generateMipMaps: JB,
          type: PB,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: pB,
          generateStencilBuffer: ZB,
          samples: AB,
          creationFlags: VB,
          noColorAttachment: SB,
          useSRGBBuffer: nB,
          colorAttachment: oB,
          label: this.name
        }, this.samplingMode === QB.e.NEAREST_SAMPLINGMODE && (this.wrapU = QB.e.CLAMP_ADDRESSMODE, this.wrapV = QB.e.CLAMP_ADDRESSMODE), WB || (zB ? (this._renderTarget = GB.Lp().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = QB.e.INVCUBIC_MODE, this._textureMatrix = DB.d.Identity()) : this._renderTarget = GB.Lp().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== AB && (this.samples = AB)))
      }
      createDepthStencilTexture() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          QB = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(BB, OB, GB, YB, DB, QB)
      }
      _processSizeParameter(BB) {
        if (BB.ratio) {
          this._sizeRatio = BB.ratio;
          const OB = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(OB.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(OB.getRenderHeight(), this._sizeRatio)
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
          const BB = this.JF();
          if (!BB) return;
          this._postProcessManager = new oB.c(BB), this._postProcesses = new Array
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
        const OB = this._postProcesses.indexOf(BB); - 1 !== OB && (this._postProcesses.splice(OB, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
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
        const OB = this._size.depth;
        return OB || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(BB) {
        const OB = Math.max(1, this.getRenderSize() * BB);
        this.resize(OB)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(BB) {
        const OB = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const GB = this.JF();
        GB && (this._processSizeParameter(BB), this._renderTarget = OB ? GB.Lp().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : GB.Lp().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(BB, OB)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => GB(44969))).then((BB => this._dumpTools = BB))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const BB = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), BB
      }
      _render() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = this.JF();
        if (!GB) return;
        void 0 !== this.useCameraPostProcesses && (BB = this.useCameraPostProcesses);
        const YB = GB.Lp();
        if (YB._debugPushGroup && YB._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let DB = 0; DB < 6; DB++) this._renderToTarget(DB, BB, OB), GB.incrementRenderId(), GB.resetCachedMaterial();
          else this._renderToTarget(0, BB, OB);
        else
          for (let DB = 0; DB < this.getRenderLayers(); DB++) this._renderToTarget(0, BB, OB, DB), GB.incrementRenderId(), GB.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), YB._debugPopGroup && YB._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(BB, OB) {
        const GB = BB * OB,
          YB = (0, jB.m)(GB + 16384 / (128 + GB));
        return Math.min((0, jB.b)(BB), YB)
      }
      _bindFrameBuffer() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GB = this.JF();
        if (!GB) return;
        const YB = GB.Lp();
        this._renderTarget && YB.bindFramebuffer(this._renderTarget, this.isCube ? BB : void 0, void 0, void 0, this.ignoreCameraViewport, 0, OB)
      }
      _unbindFrameBuffer(BB, OB) {
        this._renderTarget && BB.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(OB)
        }))
      }
      _prepareFrame(BB, OB, GB, YB) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(OB, GB) : YB && BB.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(OB, GB)
      }
      _renderToTarget(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const DB = this.JF();
        if (!DB) return;
        const QB = DB.Lp();
        this._currentFaceIndex = BB, this._currentLayer = YB, this._currentUseCameraPostProcess = OB, this._currentDumpForDebug = GB, this._prepareFrame(DB, BB, YB, OB), this._objectRenderer.render(BB + YB, !0), this._unbindFrameBuffer(QB, BB), this._texture && this.isCube && 5 === BB && QB.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(BB, OB, GB, YB)
      }
      setRenderingAutoClearDepthStencil(BB, OB) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(BB, OB)
      }
      clone() {
        const BB = this.getSize(),
          OB = new NB(this.name, BB, this.JF(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return OB.hasAlpha = this.hasAlpha, OB.level = this.level, OB.coordinatesMode = this.coordinatesMode, this.renderList && (OB.renderList = this.renderList.slice(0)), OB
      }
      serialize() {
        if (!this.name) return null;
        const BB = super.serialize();
        if (BB.renderTargetSize = this.getRenderSize(), BB.renderList = [], this.renderList)
          for (let OB = 0; OB < this.renderList.length; OB++) BB.renderList.push(this.renderList[OB].id);
        return BB
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.JF().Lp().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const BB = this.JF();
        if (!BB) return;
        let OB = BB.customRenderTargets.indexOf(this);
        OB >= 0 && BB.customRenderTargets.splice(OB, 1);
        for (const GB of BB.cameras) OB = GB.customRenderTargets.indexOf(this), OB >= 0 && GB.customRenderTargets.splice(OB, 1);
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
    NB.REFRESHRATE_RENDER_ONCE = qB.REFRESHRATE_RENDER_ONCE, NB.REFRESHRATE_RENDER_ONEVERYFRAME = qB.REFRESHRATE_RENDER_ONEVERYFRAME, NB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = qB.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(NB.prototype, "noPrePassRenderer") || Object.defineProperty(NB.prototype, "noPrePassRenderer", (0, ZB.e)("RenderTargetTexture", "noPrePassRenderer"))
  },
  44939: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB,
      h: () => MB
    });
    var YB = GB(41150),
      DB = GB(38769),
      QB = GB(37802),
      oB = GB(40857),
      jB = GB(41323);
    const yB = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class JB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yB;
        this._fullscreenViewport = new DB.c(0, 0, 1, 1);
        const GB = OB.positions ?? yB.positions,
          QB = OB.indices ?? yB.indices;
        this.engine = BB, this._vertexBuffers = {
          [YB.h.PositionKind]: new YB.h(BB, GB, YB.h.PositionKind, !1, !1, 2)
        }, this._indexBuffer = BB.createIndexBuffer(QB), this._indexBufferLength = QB.length, this._onContextRestoredObserver = BB.ip.add((() => {
          this._indexBuffer = BB.createIndexBuffer(QB);
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = OB, this.engine.stencilState.stencilTest = GB, this.engine.enableEffect(BB.drawWrapper), this.bindBuffers(BB.effect), BB.onApplyObservable.notifyObservers({})
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!BB.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const GB = null === OB ? null : this._isRenderTargetTexture(OB) ? OB.renderTarget : OB;
        GB && this.engine.bindFramebuffer(GB), this.applyEffectWrapper(BB), this.draw(), GB && this.engine.unBindFramebuffer(GB), this.restoreStates()
      }
      dispose() {
        const BB = this._vertexBuffers[YB.h.PositionKind];
        BB && (BB.dispose(), delete this._vertexBuffers[YB.h.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.ip.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class MB {
      static RegisterShaderCodeProcessing(BB, OB) {
        OB ? MB._CustomShaderCodeProcessing[BB ?? ""] = OB : delete MB._CustomShaderCodeProcessing[BB ?? ""]
      }
      static _GetShaderCodeProcessing(BB) {
        return MB._CustomShaderCodeProcessing[BB] ?? MB._CustomShaderCodeProcessing[""]
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
        this.alphaMode = 0, this.onEffectCreatedObservable = new QB.b(void 0, !0), this.onApplyObservable = new QB.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
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
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.ip.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new jB.d(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const OB = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, OB, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          YB = arguments.length > 2 ? arguments[2] : void 0,
          DB = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, DB && this._importPromises.push(...DB);
        const QB = this.options.engine.isWebGPU && !MB.ForceGLSL;
        this._gatherImports(QB, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(QB && this._webGPUReady ? GB.e(672).then((() => GB(64012))) : GB.e(662).then((() => GB(63889)))), void 0 !== YB && YB(QB, this._importPromises), QB && this._webGPUReady && (this.options.shaderLanguage = 1), BB || this.updateEffect(OB)
      }
      updateEffect() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YB = arguments.length > 3 ? arguments[3] : void 0,
          DB = arguments.length > 4 ? arguments[4] : void 0,
          QB = arguments.length > 5 ? arguments[5] : void 0,
          jB = arguments.length > 6 ? arguments[6] : void 0,
          yB = arguments.length > 7 ? arguments[7] : void 0;
        const JB = MB._GetShaderCodeProcessing(this.name);
        if (JB?.defineCustomBindings) {
          const YB = OB?.slice() ?? [];
          YB.push(...this.options.uniforms);
          const DB = GB?.slice() ?? [];
          DB.push(...this.options.samplers), BB = JB.defineCustomBindings(this.name, BB, YB, DB), OB = YB, GB = DB
        }
        this.options.defines = BB || "";
        const PB = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let zB;
        zB = this.options.extraInitializationsAsync ? async () => {
          await (PB?.()), await this.options.extraInitializationsAsync()
        }: PB, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: jB ?? this._shaderPath.vertex,
          fragment: yB ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: OB || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: GB || this.options.samplers,
          defines: null !== BB ? BB : "",
          fallbacks: null,
          onCompiled: DB ?? this.options.onCompiled,
          onError: QB ?? null,
          indexParameters: YB || this.options.indexParameters,
          processCodeAfterIncludes: JB?.processCodeAfterIncludes ? (BB, OB) => JB.processCodeAfterIncludes(this.name, BB, OB) : null,
          processFinalCode: JB?.processFinalCode ? (BB, OB) => JB.processFinalCode(this.name, BB, OB) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: zB
        }, this.options.engine) : this._drawWrapper.effect = new oB.c(this._shaderPath, this.options.attributeNames, OB || this.options.uniforms, GB || this.options.samplerNames, this.options.engine, BB, void 0, DB || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, zB), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !BB && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), MB._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Lp().ip.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    MB.ForceGLSL = !1, MB._CustomShaderCodeProcessing = {}
  },
  44969: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      Dispose: () => RB,
      DumpData: () => NB,
      DumpDataAsync: () => ZB,
      DumpFramebuffer: () => qB,
      DumpTools: () => WB,
      EncodeImageAsync: () => pB,
      RegisterDumpTools: () => VB
    });
    var YB = GB(40998),
      DB = GB(44939),
      QB = GB(41097),
      oB = GB(37807),
      jB = GB(37796),
      yB = GB(39366),
      JB = GB(41058),
      MB = GB(41004);
    let PB = null;
    async function zB() {
      return PB || (PB = async function() {
        const BB = jB.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        BB instanceof OffscreenCanvas && yB.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: OB
        } = await Promise.resolve().then((() => GB(40849)));
        if (!OB.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const YB = new OB(BB, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        jB.b.Instances.pop(), jB.b.OnEnginesDisposedObservable.add((BB => {
          YB && BB !== YB && !YB.lV && 0 === jB.b.Instances.length && RB()
        })), YB.getCaps().parallelShaderCompile = void 0;
        const QB = new DB.d(YB),
          {
            passPixelShader: oB
          } = await GB.e(680).then((() => GB(64051))),
          JB = new DB.h({
            engine: YB,
            name: oB.name,
            fragmentShader: oB.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: BB,
          dumpEngine: {
            engine: YB,
            renderer: QB,
            wrapper: JB
          }
        }
      }()), await PB
    }
    let lB = (() => {
      var BB;
      let OB, GB = [];
      return BB = class {
        static async EncodeImageAsync(BB, OB, GB, YB, DB, oB) {
          const jB = await zB(),
            yB = jB.dumpEngine;
          yB.engine.setSize(OB, GB, !0);
          const JB = yB.engine.createRawTexture(BB, OB, GB, 5, !1, !DB, 1);
          return yB.renderer.setViewport(), yB.renderer.applyEffectWrapper(yB.wrapper), yB.wrapper.effect._bindTexture("textureSampler", JB), yB.renderer.draw(), JB.dispose(), await new Promise(((BB, OB) => {
            QB.j.ToBlob(jB.canvas, (GB => {
              GB ? BB(GB) : OB(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), YB, oB)
          }))
        }
      }, (() => {
        const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [MB.j], (0, YB.h)(BB, null, OB, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: BB => "EncodeImageAsync" in BB,
            get: BB => BB.EncodeImageAsync
          },
          metadata: DB
        }, null, GB), DB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DB
        }), (0, YB.j)(BB, GB)
      })(), BB
    })();
    const pB = lB.EncodeImageAsync;
    async function qB(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        QB = arguments.length > 5 ? arguments[5] : void 0,
        oB = arguments.length > 6 ? arguments[6] : void 0;
      const jB = await GB.readPixels(0, 0, BB, OB);
      NB(BB, OB, new Uint8Array(jB.buffer), YB, DB, QB, !0, void 0, oB)
    }
    async function ZB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        DB = arguments.length > 4 ? arguments[4] : void 0,
        jB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        MB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        PB = arguments.length > 7 ? arguments[7] : void 0;
      if (GB instanceof Float32Array) {
        const BB = new Uint8Array(GB.length);
        let OB = GB.length;
        for (; OB--;) {
          const YB = GB[OB];
          BB[OB] = Math.round(255 * (0, oB.Clamp)(YB))
        }
        GB = BB
      }
      const zB = await lB.EncodeImageAsync(GB, BB, OB, YB, jB, PB);
      void 0 !== DB && QB.j.DownloadBlob(zB, DB), zB.type !== YB && yB.b.Warn(`DumpData: The requested mimeType '${YB}' is not supported. The result has mimeType '${zB.type}' instead.`);
      const pB = await zB.arrayBuffer();
      return MB ? pB : `data:${YB};base64,${(0,JB.k)(pB)}`
    }

    function NB(BB, OB, GB, YB) {
      let DB = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== DB || YB || (DB = ""), ZB(BB, OB, GB, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", DB, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((BB => {
        YB && YB(BB)
      }))
    }

    function RB() {
      PB && (PB?.then((BB => {
        BB.canvas instanceof HTMLCanvasElement && BB.canvas.remove(), BB.dumpEngine && (BB.dumpEngine.engine.dispose(), BB.dumpEngine.renderer.dispose(), BB.dumpEngine.wrapper.dispose())
      })), PB = null)
    }
    const WB = {
      DumpData: NB,
      DumpDataAsync: ZB,
      DumpFramebuffer: qB,
      Dispose: RB
    };
    let AB = !1;

    function VB() {
      if (AB) return;
      AB = !0;
      QB.j.DumpData = NB, QB.j.DumpDataAsync = ZB, QB.j.DumpFramebuffer = qB
    }
  },
  44947: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => lB,
      h: () => pB,
      k: () => qB
    });
    var YB = GB(41470),
      DB = GB(44953),
      QB = GB(40998),
      oB = GB(44931),
      jB = GB(41022),
      yB = GB(44960),
      JB = GB(41004);
    class MB extends oB.b {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(BB, OB) {
        let GB = arguments.length > 4 ? arguments[4] : void 0;
        const YB = {
          size: "number" === typeof OB ? OB : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: GB,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...OB
        };
        super(BB, yB.d.FragmentUrl, {
          effectWrapper: "number" !== typeof OB && OB.effectWrapper ? void 0 : new yB.d(BB, GB, YB),
          ...YB
        })
      }
      static _Parse(BB, OB, GB, YB) {
        return jB.d.Parse((() => new MB(BB.name, BB.options, OB, BB.renderTargetSamplingMode, BB._engine, BB.reusable)), BB, GB, YB)
      }
    }(() => {
      var BB;
      let OB, GB = oB.b,
        YB = [];
      BB = class extends GB {
        get face() {
          return this._effectWrapper.face
        }
        set face(BB) {
          this._effectWrapper.face = BB
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(BB, OB) {
          let GB = arguments.length > 4 ? arguments[4] : void 0;
          const DB = {
            size: "number" === typeof OB ? OB : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: GB,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...OB
          };
          super(BB, yB.d.FragmentUrl, {
            effectWrapper: "number" !== typeof OB && OB.effectWrapper ? void 0 : new yB.c(BB, GB, DB),
            ...DB
          }), (0, QB.j)(this, YB)
        }
        static _Parse(OB, GB, YB, DB) {
          return jB.d.Parse((() => new BB(OB.name, OB.options, GB, OB.renderTargetSamplingMode, OB._engine, OB.reusable)), OB, YB, DB)
        }
      }, (() => {
        const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(GB[Symbol.metadata] ?? null) : void 0;
        OB = [(0, JB.L)()], (0, QB.h)(BB, null, OB, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: BB => "face" in BB,
            get: BB => BB.face
          },
          metadata: DB
        }, null, YB), DB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DB
        })
      })()
    })();
    var PB = GB(37807),
      zB = GB(41071);

    function lB(BB, OB, GB, YB, DB, QB, jB, yB) {
      const JB = OB.Lp();
      return OB.isReady = !1, DB = DB ?? OB.samplingMode, YB = YB ?? OB.type, QB = QB ?? OB.format, jB = jB ?? OB.width, yB = yB ?? OB.height, -1 === YB && (YB = 0), new Promise((MB => {
        const PB = new oB.b("postprocess", BB, null, null, 1, null, DB, JB, !1, void 0, YB, void 0, null, !1, QB);
        PB.externalTextureSamplerBinding = !0;
        const zB = JB.createRenderTargetTexture({
          width: jB,
          height: yB
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: DB,
          type: YB,
          format: QB
        });
        PB.onEffectCreatedObservable.addOnce((BB => {
          BB.executeWhenCompiled((() => {
            PB.onApply = BB => {
              BB._bindTexture("textureSampler", OB), BB.setFloat2("scale", 1, 1)
            }, GB.postProcessManager.directRender([PB], zB, !0), JB.restoreDefaultFramebuffer(), JB._releaseTexture(OB), PB && PB.dispose(), zB._swapAndDie(OB), OB.type = YB, OB.format = 5, OB.isReady = !0, MB(OB)
          }))
        }))
      }))
    }
    async function pB(BB, OB, QB) {
      let jB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        JB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        MB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(BB) {
        if (BB.isReady()) return;
        if (BB.loadingError) throw new Error(BB.errorObject?.message || `Texture ${BB.name} errored while loading.`);
        const OB = BB.onLoadObservable;
        if (OB) return await new Promise((BB => OB.addOnce((() => BB()))));
        const GB = BB._texture?.onLoadedObservable;
        if (GB) return await new Promise((BB => GB.addOnce((() => BB()))));
        throw new Error(`Cannot determine readiness of texture ${BB.name}.`)
      }(BB);
      const zB = BB.getInternalTexture(),
        lB = BB.is3D || !!zB?.is3D,
        {
          width: pB,
          height: qB
        } = BB.getSize(),
        ZB = OB ?? pB,
        NB = QB ?? qB;
      if (JB || lB || function(BB) {
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
        }(BB.textureFormat) || ZB !== pB || NB !== qB) {
        if (BB.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${JB?"RTT":"compression"} is not supported.`);
        return await async function(BB, OB, QB, jB, yB) {
          let JB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const MB = BB.JF(),
            PB = MB.Lp(),
            zB = BB.getInternalTexture(),
            lB = BB.is3D || !!zB?.is3D;
          let pB;
          if (PB.isWebGPU ? lB ? await GB.e(676).then((() => GB(64031))) : BB.isCube ? await GB.e(677).then((() => GB(64034))) : await GB.e(678).then((() => GB(64042))) : lB ? await GB.e(673).then((() => GB(64021))) : BB.isCube ? await GB.e(674).then((() => GB(64023))) : await GB.e(675).then((() => GB(64025))), lB) pB = new oB.b("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: YB.e.NEAREST_NEAREST_MIPNEAREST,
            engine: PB,
            shaderLanguage: PB.isWebGPU ? 1 : 0
          });
          else if (BB.isCube) {
            const BB = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            pB = new oB.b("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: YB.e.NEAREST_NEAREST_MIPNEAREST,
              engine: PB,
              defines: BB[jB],
              shaderLanguage: PB.isWebGPU ? 1 : 0
            })
          } else pB = new oB.b("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: YB.e.NEAREST_NEAREST_MIPNEAREST,
            engine: PB,
            shaderLanguage: PB.isWebGPU ? 1 : 0
          });
          await new Promise((BB => {
            pB.onEffectCreatedObservable.addOnce((OB => {
              OB.executeWhenCompiled((() => {
                BB(0)
              }))
            }))
          }));
          const qB = new DB.d("temp", {
            width: OB,
            height: QB
          }, MB, !1);
          pB.onApply = function(OB) {
            OB.setTexture("textureSampler", BB), OB.setFloat("lod", yB), OB.setInt("gamma", BB.gammaSpace ? 1 : 0), lB && OB.setFloat("slice", JB)
          };
          try {
            if (qB.renderTarget && zB) {
              const GB = zB.samplingMode;
              0 !== yB ? BB.updateSamplingMode(YB.e.NEAREST_NEAREST_MIPNEAREST) : BB.updateSamplingMode(YB.e.NEAREST_NEAREST), MB.postProcessManager.directRender([pB], qB.renderTarget, !0), BB.updateSamplingMode(GB);
              const DB = await PB.readPixels(0, 0, OB, QB),
                oB = new Uint8Array(DB.buffer, DB.byteOffset, DB.byteLength);
              return PB.unBindFramebuffer(qB.renderTarget), oB
            }
            throw Error("Render to texture failed.")
          } finally {
            qB.dispose(), pB.dispose()
          }
        }(BB, ZB, NB, jB, yB, MB)
      }
      let RB = await BB.readPixels(jB, yB);
      if (!RB) throw new Error(`Failed to read pixels from texture ${BB.name}.`);
      if (RB instanceof Float32Array) {
        const BB = new Uint8Array(RB.length);
        let OB = RB.length;
        for (; OB--;) {
          const GB = RB[OB];
          BB[OB] = Math.round(255 * (0, PB.Clamp)(GB))
        }
        RB = BB
      }
      const WB = ZB * NB,
        AB = 4 * WB;
      if (RB.length !== AB) {
        const BB = 0 === WB ? 0 : RB.length / WB;
        if (1 === BB || 2 === BB || 3 === BB) {
          const OB = new Uint8Array(AB);
          for (let GB = 0, YB = 0, DB = 0; GB < WB; GB++, DB += 4) {
            const GB = RB[YB++];
            if (1 === BB) {
              OB[DB] = GB, OB[DB + 1] = GB, OB[DB + 2] = GB, OB[DB + 3] = 255;
              continue
            }
            const QB = RB[YB++];
            2 !== BB ? (OB[DB] = GB, OB[DB + 1] = QB, OB[DB + 2] = RB[YB++], OB[DB + 3] = 255) : (OB[DB] = GB, OB[DB + 1] = QB, OB[DB + 2] = 0, OB[DB + 3] = 255)
          }
          return OB
        }
      }
      return RB
    }
    const qB = {
      CreateResizedCopy: function(BB, OB, GB) {
        let QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const oB = BB.JF(),
          jB = oB.Lp(),
          yB = new DB.d("resized" + BB.name, {
            width: OB,
            height: GB
          }, oB, !BB.noMipmap, !0, BB._texture.type, !1, BB.samplingMode, !1);
        yB.wrapU = BB.wrapU, yB.wrapV = BB.wrapV, yB.uOffset = BB.uOffset, yB.vOffset = BB.vOffset, yB.uScale = BB.uScale, yB.vScale = BB.vScale, yB.uAng = BB.uAng, yB.vAng = BB.vAng, yB.wAng = BB.wAng, yB.coordinatesIndex = BB.coordinatesIndex, yB.level = BB.level, yB.anisotropicFilteringLevel = BB.anisotropicFilteringLevel, yB._texture.isReady = !1, BB.wrapU = YB.e.CLAMP_ADDRESSMODE, BB.wrapV = YB.e.CLAMP_ADDRESSMODE;
        const JB = new MB("pass", 1, null, QB ? YB.e.BILINEAR_SAMPLINGMODE : YB.e.NEAREST_SAMPLINGMODE, jB, !1, 0);
        return JB.externalTextureSamplerBinding = !0, JB.onEffectCreatedObservable.addOnce((OB => {
          OB.executeWhenCompiled((() => {
            JB.onApply = function(OB) {
              OB.setTexture("textureSampler", BB)
            };
            const OB = yB.renderTarget;
            OB && (oB.postProcessManager.directRender([JB], OB), jB.unBindFramebuffer(OB), yB.disposeFramebufferObjects(), JB.dispose(), yB.getInternalTexture().isReady = !0)
          }))
        })), yB
      },
      ApplyPostProcess: lB,
      ToHalfFloat: zB.l,
      FromHalfFloat: zB.e,
      GetTextureDataAsync: pB
    }
  },
  44931: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => pB
    });
    var YB = GB(40998),
      DB = GB(41112),
      QB = GB(37802),
      oB = GB(37778),
      jB = GB(40857),
      yB = GB(41004),
      JB = GB(41022),
      MB = GB(37823),
      PB = GB(40905),
      zB = GB(40932),
      lB = GB(44939);
    let pB = (() => {
        var BB;
        let OB, jB, PB, pB, qB, NB, RB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB = [],
          uB = [],
          mB = [],
          IB = [],
          FB = [],
          iB = [],
          LB = [],
          gB = [],
          rB = [],
          XB = [],
          wB = [],
          EB = [],
          cB = [],
          hB = [],
          aB = [],
          eB = [],
          TB = [],
          bB = [],
          CB = [],
          HB = [],
          vB = [],
          sB = [],
          xB = [],
          tB = [],
          BO = [],
          OO = [],
          GO = [],
          YO = [],
          DO = [];
        return BB = class {
          static get ForceGLSL() {
            return lB.h.ForceGLSL
          }
          static set ForceGLSL(BB) {
            lB.h.ForceGLSL = BB
          }
          static RegisterShaderCodeProcessing(BB, OB) {
            lB.h.RegisterShaderCodeProcessing(BB, OB)
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
            return this.N_
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.zOB(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(OB, GB, jB, yB, JB, MB) {
            let PB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              zB = arguments.length > 7 ? arguments[7] : void 0,
              pB = arguments.length > 8 ? arguments[8] : void 0,
              qB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              NB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              RB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              WB = arguments.length > 12 ? arguments[12] : void 0,
              AB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              VB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              SB = arguments.length > 15 ? arguments[15] : void 0,
              nB = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, YB.j)(this, KB), null), this.uniqueId = (0, YB.j)(this, uB, void 0), this.width = ((0, YB.j)(this, mB), (0, YB.j)(this, IB, -1)), this.height = ((0, YB.j)(this, FB), (0, YB.j)(this, iB, -1)), this.nodeMaterialSource = ((0, YB.j)(this, LB), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, YB.j)(this, gB, void 0), this.clearColor = ((0, YB.j)(this, rB), (0, YB.j)(this, XB, void 0)), this.autoClear = ((0, YB.j)(this, wB), (0, YB.j)(this, EB, !0)), this.forceAutoClearInAlphaMode = ((0, YB.j)(this, cB), (0, YB.j)(this, hB, !1)), this.alphaConstants = ((0, YB.j)(this, aB), (0, YB.j)(this, eB, void 0)), this.animations = ((0, YB.j)(this, TB), []), this.enablePixelPerfectMode = (0, YB.j)(this, bB, !1), this.forceFullscreenViewport = ((0, YB.j)(this, CB), (0, YB.j)(this, HB, !0)), this.inspectableCustomProperties = (0, YB.j)(this, vB), this.scaleMode = (0, YB.j)(this, sB, 1), this.alwaysForcePOT = ((0, YB.j)(this, xB), (0, YB.j)(this, tB, !1)), this._samples = ((0, YB.j)(this, BO), (0, YB.j)(this, OO, 1)), this.adaptScaleToCurrentViewport = ((0, YB.j)(this, GO), (0, YB.j)(this, YO, !1)), this.doNotSerialize = ((0, YB.j)(this, DO), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new DB.d(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new oB.o(1, 1), this._texelSize = oB.o.Zero(), this.onActivateObservable = new QB.b, this.onSizeChangedObservable = new QB.b, this.onApplyObservable = new QB.b, this.onBeforeRenderObservable = new QB.b, this.onAfterRenderObservable = new QB.b, this.lF = new QB.b, ZB();
            let UB, fB = 1,
              kB = null;
            if (jB && !Array.isArray(jB)) {
              const BB = jB;
              jB = BB.uniforms ?? null, yB = BB.samplers ?? null, fB = BB.size ?? 1, MB = BB.camera ?? null, PB = BB.samplingMode ?? 1, zB = BB.engine, pB = BB.reusable, qB = Array.isArray(BB.defines) ? BB.defines.join("\n") : BB.defines ?? null, NB = BB.textureType ?? 0, RB = BB.vertexUrl ?? "postprocess", WB = BB.indexParameters, AB = BB.blockCompilation ?? !1, VB = BB.textureFormat ?? 5, SB = BB.shaderLanguage ?? 0, kB = BB.uniformBuffers ?? null, nB = BB.extraInitializations, UB = BB.effectWrapper
            } else JB && (fB = "number" === typeof JB ? JB : {
              width: JB.width,
              height: JB.height
            });
            if (this._useExistingThinPostProcess = !!UB, this._effectWrapper = UB ?? new lB.h({
                name: OB,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: GB,
                engine: zB || MB?.JF().Lp(),
                uniforms: jB,
                samplers: yB,
                uniformBuffers: kB,
                defines: qB,
                vertexUrl: RB,
                indexParameters: WB,
                blockCompilation: !0,
                shaderLanguage: SB,
                extraInitializations: void 0
              }), this.name = OB, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != MB ? (this.N_ = MB, this._scene = MB.JF(), MB.attachPostProcess(this), this._engine = this._scene.Lp(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : zB && (this._engine = zB, this._engine.postProcesses.push(this)), this._options = fB, this.renderTargetSamplingMode = PB || 1, this._reusable = pB || !1, this._textureType = NB, this._textureFormat = VB, this._shaderLanguage = SB || 0, this._samplers = yB || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = GB, this._vertexUrl = RB, this._parameters = jB || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = kB || [], this._indexParameters = WB, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const OB = [];
              this._gatherImports(this._engine.isWebGPU && !BB.ForceGLSL, OB), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(AB, qB, nB, OB)
            }
          }
          _gatherImports() {
            let BB = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? BB.push(Promise.all([GB.e(672).then((() => GB(64012)))])) : BB.push(Promise.all([GB.e(662).then((() => GB(63889)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Lp() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(BB) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = BB, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new DB.d(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              YB = arguments.length > 3 ? arguments[3] : void 0,
              DB = arguments.length > 4 ? arguments[4] : void 0,
              QB = arguments.length > 5 ? arguments[5] : void 0,
              oB = arguments.length > 6 ? arguments[6] : void 0,
              jB = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(BB, OB, GB, YB, DB, QB, oB, jB), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(BB, OB) {
            let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let DB = 0; DB < this._textureCache.length; DB++)
              if (this._textureCache[DB].texture.width === BB.width && this._textureCache[DB].texture.height === BB.height && this._textureCache[DB].postProcessChannel === GB && this._textureCache[DB].texture._generateDepthBuffer === OB.generateDepthBuffer && this._textureCache[DB].texture.samples === OB.samples) return this._textureCache[DB].texture;
            const YB = this._engine.createRenderTargetTexture(BB, OB);
            return this._textureCache.push({
              texture: YB,
              postProcessChannel: GB,
              lastUsedRenderId: -1
            }), YB
          }
          _flushTextureCache() {
            const BB = this._renderId;
            for (let OB = this._textureCache.length - 1; OB >= 0; OB--)
              if (BB - this._textureCache[OB].lastUsedRenderId > 100) {
                let BB = !1;
                for (let GB = 0; GB < this._textures.length; GB++)
                  if (this._textures.data[GB] === this._textureCache[OB].texture) {
                    BB = !0;
                    break
                  } BB || (this._textureCache[OB].texture.dispose(), this._textureCache.splice(OB, 1))
              }
          }
          resize(BB, OB) {
            let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = BB, this.height = OB;
            let QB = null;
            if (GB)
              for (let yB = 0; yB < GB._postProcesses.length; yB++)
                if (null !== GB._postProcesses[yB]) {
                  QB = GB._postProcesses[yB];
                  break
                } const oB = {
                width: this.width,
                height: this.height
              },
              jB = {
                generateMipMaps: YB,
                generateDepthBuffer: DB || QB === this,
                generateStencilBuffer: (DB || QB === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(oB, jB, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(oB, jB, 1)), this._texelSize.zOB(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let BB;
            if (this._shareOutputWithPostProcess) BB = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) BB = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let OB;
              BB = this.inputTexture;
              for (let GB = 0; GB < this._textureCache.length; GB++)
                if (this._textureCache[GB].texture === BB) {
                  OB = this._textureCache[GB];
                  break
                } OB && (OB.lastUsedRenderId = this._renderId)
            }
            return BB
          }
          activate(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              GB = arguments.length > 2 ? arguments[2] : void 0;
            const YB = null === BB || void 0 !== BB.cameraRigMode ? BB || this.N_ : null,
              DB = YB?.JF() ?? BB,
              QB = DB.Lp(),
              oB = QB.getCaps().maxTextureSize,
              jB = (OB ? OB.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              yB = (OB ? OB.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let JB = this._options.width || jB,
              MB = this._options.height || yB;
            const PB = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let lB = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const BB = QB.currentViewport;
                BB && (JB *= BB.width, MB *= BB.height)
              }(PB || this.alwaysForcePOT) && (this._options.width || (JB = QB.needPOTTextures ? (0, zB.f)(JB, oB, this.scaleMode) : JB), this._options.height || (MB = QB.needPOTTextures ? (0, zB.f)(MB, oB, this.scaleMode) : MB)), this.width === JB && this.height === MB && (lB = this._getTarget()) || this.resize(JB, MB, YB, PB, GB), this._textures.forEach((BB => {
                BB.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(BB, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return lB || (lB = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.zOB(jB / JB, yB / MB), this._engine.bindFramebuffer(lB, 0, jB, yB, this.forceFullscreenViewport)) : (this._scaleRatio.zOB(1, 1), this._engine.bindFramebuffer(lB, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(YB), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : DB.clearColor, DB._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), lB
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
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Lp().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), BB = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", BB?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
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
            let OB;
            if (BB = BB || this.N_, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (OB = this._parentContainer.postProcesses.indexOf(this), OB > -1 && this._parentContainer.postProcesses.splice(OB, 1), this._parentContainer = null), OB = this._engine.postProcesses.indexOf(this), -1 !== OB && this._engine.postProcesses.splice(OB, 1), this.lF.notifyObservers(), BB) {
              if (BB.detachPostProcess(this), OB = BB._postProcesses.indexOf(this), 0 === OB && BB._postProcesses.length > 0) {
                const BB = this.N_._getFirstPostProcess();
                BB && BB.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const BB = JB.d.Serialize(this),
              OB = this.getCamera() || this._scene && this._scene.activeCamera;
            return BB.customType = "BABYLON." + this.getClassName(), BB.cameraId = OB ? OB.id : null, BB.reusable = this._reusable, BB.textureType = this._textureType, BB.fragmentUrl = this._fragmentUrl, BB.parameters = this._parameters, BB.samplers = this._samplers, BB.uniformBuffers = this._uniformBuffers, BB.options = this._options, BB.defines = this._postProcessDefines, BB.textureFormat = this._textureFormat, BB.vertexUrl = this._vertexUrl, BB.indexParameters = this._indexParameters, BB
          }
          clone() {
            const OB = this.serialize();
            OB._engine = this._engine, OB.cameraId = null;
            const GB = BB.Parse(OB, this._scene, "");
            return GB ? (GB.onActivateObservable = this.onActivateObservable.clone(), GB.onSizeChangedObservable = this.onSizeChangedObservable.clone(), GB.onApplyObservable = this.onApplyObservable.clone(), GB.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), GB.onAfterRenderObservable = this.onAfterRenderObservable.clone(), GB._prePassEffectConfiguration = this._prePassEffectConfiguration, GB) : null
          }
          static Parse(BB, OB, GB) {
            const YB = (0, MB.c)(BB.customType);
            if (!YB || !YB._Parse) return null;
            const DB = OB ? OB.getCameraById(BB.cameraId) : null;
            return YB._Parse(BB, DB, OB, GB)
          }
          static _Parse(OB, GB, YB, DB) {
            return JB.d.Parse((() => new BB(OB.name, OB.fragmentUrl, OB.parameters, OB.samplers, OB.options, GB, OB.renderTargetSamplingMode, OB._engine, OB.reusable, OB.defines, OB.textureType, OB.vertexUrl, OB.indexParameters, !1, OB.textureFormat)), OB, YB, DB)
          }
        }, (() => {
          const GB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OB = [(0, yB.L)()], jB = [(0, yB.L)()], PB = [(0, yB.L)()], pB = [(0, yB.L)()], qB = [(0, yB.L)()], NB = [(0, yB.o)()], RB = [(0, yB.L)()], WB = [(0, yB.L)()], AB = [(0, yB.L)()], VB = [(0, yB.L)()], SB = [(0, yB.L)()], nB = [(0, yB.L)()], UB = [(0, yB.L)()], fB = [(0, yB.L)()], kB = [(0, yB.L)("samples")], dB = [(0, yB.L)()], (0, YB.h)(BB, null, jB, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name
            },
            metadata: GB
          }, null, KB), (0, YB.h)(BB, null, AB, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaMode" in BB,
              get: BB => BB.alphaMode
            },
            metadata: GB
          }, null, KB), (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: BB => "uniqueId" in BB,
              get: BB => BB.uniqueId,
              set: (BB, OB) => {
                BB.uniqueId = OB
              }
            },
            metadata: GB
          }, uB, mB), (0, YB.h)(null, null, PB, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: BB => "width" in BB,
              get: BB => BB.width,
              set: (BB, OB) => {
                BB.width = OB
              }
            },
            metadata: GB
          }, IB, FB), (0, YB.h)(null, null, pB, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: BB => "height" in BB,
              get: BB => BB.height,
              set: (BB, OB) => {
                BB.height = OB
              }
            },
            metadata: GB
          }, iB, LB), (0, YB.h)(null, null, qB, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "renderTargetSamplingMode" in BB,
              get: BB => BB.renderTargetSamplingMode,
              set: (BB, OB) => {
                BB.renderTargetSamplingMode = OB
              }
            },
            metadata: GB
          }, gB, rB), (0, YB.h)(null, null, NB, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "clearColor" in BB,
              get: BB => BB.clearColor,
              set: (BB, OB) => {
                BB.clearColor = OB
              }
            },
            metadata: GB
          }, XB, wB), (0, YB.h)(null, null, RB, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoClear" in BB,
              get: BB => BB.autoClear,
              set: (BB, OB) => {
                BB.autoClear = OB
              }
            },
            metadata: GB
          }, EB, cB), (0, YB.h)(null, null, WB, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceAutoClearInAlphaMode" in BB,
              get: BB => BB.forceAutoClearInAlphaMode,
              set: (BB, OB) => {
                BB.forceAutoClearInAlphaMode = OB
              }
            },
            metadata: GB
          }, hB, aB), (0, YB.h)(null, null, VB, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaConstants" in BB,
              get: BB => BB.alphaConstants,
              set: (BB, OB) => {
                BB.alphaConstants = OB
              }
            },
            metadata: GB
          }, eB, TB), (0, YB.h)(null, null, SB, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "enablePixelPerfectMode" in BB,
              get: BB => BB.enablePixelPerfectMode,
              set: (BB, OB) => {
                BB.enablePixelPerfectMode = OB
              }
            },
            metadata: GB
          }, bB, CB), (0, YB.h)(null, null, nB, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceFullscreenViewport" in BB,
              get: BB => BB.forceFullscreenViewport,
              set: (BB, OB) => {
                BB.forceFullscreenViewport = OB
              }
            },
            metadata: GB
          }, HB, vB), (0, YB.h)(null, null, UB, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "scaleMode" in BB,
              get: BB => BB.scaleMode,
              set: (BB, OB) => {
                BB.scaleMode = OB
              }
            },
            metadata: GB
          }, sB, xB), (0, YB.h)(null, null, fB, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: BB => "alwaysForcePOT" in BB,
              get: BB => BB.alwaysForcePOT,
              set: (BB, OB) => {
                BB.alwaysForcePOT = OB
              }
            },
            metadata: GB
          }, tB, BO), (0, YB.h)(null, null, kB, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: BB => "_samples" in BB,
              get: BB => BB._samples,
              set: (BB, OB) => {
                BB._samples = OB
              }
            },
            metadata: GB
          }, OO, GO), (0, YB.h)(null, null, dB, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: BB => "adaptScaleToCurrentViewport" in BB,
              get: BB => BB.adaptScaleToCurrentViewport,
              set: (BB, OB) => {
                BB.adaptScaleToCurrentViewport = OB
              }
            },
            metadata: GB
          }, YO, DO), GB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: GB
          })
        })(), BB
      })(),
      qB = !1;

    function ZB() {
      qB || (qB = !0, PB.d.prototype.setTextureFromPostProcess = function(BB, OB, GB) {
        let YB = null;
        OB && (OB._forcedOutputTexture ? YB = OB._forcedOutputTexture : OB._textures.data[OB._currentRenderTextureInd] && (YB = OB._textures.data[OB._currentRenderTextureInd])), this._bindTexture(BB, YB?.texture ?? null, GB)
      }, PB.d.prototype.setTextureFromPostProcessOutput = function(BB, OB, GB) {
        this._bindTexture(BB, OB?._outputTexture?.texture ?? null, GB)
      }, jB.c.prototype.setTextureFromPostProcess = function(BB, OB) {
        this._engine.setTextureFromPostProcess(this._samplers[BB], OB, BB)
      }, jB.c.prototype.setTextureFromPostProcessOutput = function(BB, OB) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[BB], OB, BB)
      }, (0, MB.f)("BABYLON.PostProcess", pB))
    }
  },
  44960: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      d: () => QB
    });
    var YB = GB(44939),
      DB = GB(37796);
    class QB extends YB.h {
      _gatherImports(BB, OB) {
        BB ? (this._webGPUReady = !0, OB.push(Promise.all([GB.e(679).then((() => GB(64046)))]))) : OB.push(Promise.all([GB.e(680).then((() => GB(64051)))])), super._gatherImports(BB, OB)
      }
      constructor(BB) {
        let OB = arguments.length > 2 ? arguments[2] : void 0;
        const GB = {
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || DB.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: QB.FragmentUrl,
          ...OB
        };
        GB.engine || (GB.engine = DB.b.LastCreatedEngine), super(GB)
      }
    }
    QB.FragmentUrl = "pass";
    class oB extends YB.h {
      _gatherImports(BB, OB) {
        BB ? (this._webGPUReady = !0, OB.push(Promise.all([GB.e(681).then((() => GB(64053)))]))) : OB.push(Promise.all([GB.e(682).then((() => GB(64055)))])), super._gatherImports(BB, OB)
      }
      constructor(BB) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || DB.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: oB.FragmentUrl,
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
    oB.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);